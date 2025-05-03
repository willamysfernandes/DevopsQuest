const express = require('express');
const db = require('./db'); // Importa a conexão com o SQLite
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Atualiza a rota /status para registrar no banco
app.get('/status', (req, res) => {
  const timestamp = new Date().toISOString();

  db.run(
    'INSERT INTO status_logs (timestamp) VALUES (?)',
    [timestamp],
    (err) => {
      if (err) {
        console.error('Erro ao salvar no banco:', err.message);
        return res.status(500).json({ status: 'error', error: err.message });
      }

      res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp
      });
    }
  );
});


if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}

module.exports = app;

