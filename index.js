const express = require('express');
const db = require('./db'); // Importa a conexão com o SQLite
const app = express();

// Rota simples
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota de status que registra no banco
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

// Inicializa o servidor se este arquivo for executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
