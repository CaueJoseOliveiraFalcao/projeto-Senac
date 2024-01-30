const mysql = require("mysql");
const { invoices, customers, revenue, users } = require('../app/lib/placeholder-data.js');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const { resolve } = require("path");
const { rejects } = require("assert");

async function main() {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
  });

  try {
    await new Promise((resolve , reject) => {
      connection.connect((err)=>{
        if (err) reject(err);
        else resolve();
      });
    });

    await seedUsers(connection);
    await seedIvoices(connection);
  } catch (err) {
    console.error('An error occurred while attempting to seed the database:', err);
  } finally {
    connection.end(); // Close the connection
  }

}
async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable =`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    await client.query(createTable);

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const insertUsersQuery = `
        INSERT IGNORE INTO users (id, name, email, password)
        VALUES (?, ?, ?, ?)
      `;
      return client.query(insertUsersQuery , [user.id , user.name , user.email , hashedPassword])
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function seedIvoices(client){
  try{
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS invoices (
      id VARCHAR(36) PRIMARY KEY,
      customer_id VARCHAR(36) NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
      );
    `;

    await client.query(createTableQuery);

    console.log(`Created "invoices" table`);

    const insertInvoices = await Promise.all(
      invoices.map(async (invoice) => {
        const id = uuidv4();
        const insertInvoicesQuery = `
          INSERT INTO invoices (id, customer_id, amount, status, date)
          VALUES (?, ?, ?, ?, ?)
        `;
        return client.query(insertInvoicesQuery  , [id , invoice.customer_id , invoice.amount , invoice.status , invoice.date]);
      })
    );

    console.log('Seeded : ', insertInvoices.length , 'invoices');

    return {
      createTableQuery,
      invoices: insertInvoices,
    };
  } catch(error){
    console.error('Error : ' , error);
    throw error;
  }
}


// Either await the main function or return its promise for proper control flow
async function seed(){
  try{
    await main();
    console.log('insersoa de dados concluida')

  }
  catch(err){
    console.error("insersao nao concluida:" , err);
  }
}


seed();