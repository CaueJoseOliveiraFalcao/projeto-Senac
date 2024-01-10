const mysql = require("mysql");
const { invoices, customers, revenue, users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function main() {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    port: process.env.MYSQL_PORT,
    password: 'C4u3j0s3',
    database: process.env.MYSQL_DATABASE
  });

  try {
    await connection.connect();

    // **Add data seeding logic here using placeholder data**
    // Example:
    // await connection.query('INSERT INTO invoices SET ?', invoices);
    // await connection.query('INSERT INTO customers SET ?', customers);
    // ...

  } catch (err) {
    console.error('An error occurred while attempting to seed the database:', err);
  } finally {
    await connection.end(); // Close the connection
  }
}

// Either await the main function or return its promise for proper control flow
await main();
// or
main().then(() => {
  console.log('Seeding completed successfully');
}).catch((err) => {
  console.error('Seeding failed:', err);
});