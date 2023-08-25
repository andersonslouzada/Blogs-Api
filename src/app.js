const express = require('express');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { 
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return res.status(200).json({ message: 'Login efetuado com sucesso' });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
