const express = require("express");
const path = require("path");

const app = express();
var port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/marvelAngular"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/marvelAngular/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(port);
