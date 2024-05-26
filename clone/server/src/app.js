const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Tratamento básico de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
