import { createConnection as createMySQLConnection } from 'mysql2/promise';
import { Connection } from 'mysql';
let connection: Connection | null = null;

async function createConnection(): Promise<Connection | null> {
    if (!connection) {
        try {
            connection = await createMySQLConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'nextjs'
            });
        } catch (error) {
            console.error('Erro ao estabelecer conexão com o banco de dados:', error);
            return null;
        }
    }
    return connection;
}

export { createConnection };
