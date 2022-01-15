const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// Connection URL-test
//Al contenedor se le paso la variable de entorno MONGO_URL 
//Esta app admite una variable de entorno o la conexión definida en texto
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 KABOOM 💥: ' + err);
    } else {
      res.send('Me conecté a la Base de Datos! 😎');
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
