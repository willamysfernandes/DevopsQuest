const express = require('express');
const app = express();

// Rota simples
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota de status
app.get('/status', (req, res) => {
  const timestamp = new Date().toISOString();

  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp
  });
});

// Inicializa o servidor se este arquivo for executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
