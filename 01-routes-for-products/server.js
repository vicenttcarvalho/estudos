//Criando servidor sem express
const http = require("http");

http.createServer((req, res) => {
  if (req.url === '/produto') {
    res.end(JSON.stringify({
      message: "Rota de produto"
    }))
  }
  if (req.url === '/usuarios') {
    res.end(JSON.stringify({
      message: "Rota de usuarios"
    }))
  }
  res.end(JSON.stringify({
    message: "Qualquer outra rota"
  }))
}).listen(4001, () => console.log("Servidor rodando na porta 4001"))