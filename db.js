// db.js

const sqlite3 = require('sqlite3').verbose(); // Importa o driver do SQLite com logs verbosos
const db = new sqlite3.Database('./devopsquest.db'); // Cria ou abre um arquivo de banco de dados

// Executa comandos SQL em sequência
db.serialize(() => {
  // Cria uma tabela chamada 'status_logs' se ela ainda não existir
  db.run(`
    CREATE TABLE IF NOT EXISTS status_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT
    )
  `);
});

module.exports = db; // Exporta a instância do banco para usar em outros arquivos
