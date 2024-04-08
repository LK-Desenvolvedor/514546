const express = require("express");
const routes = require("./src/routes/userRoutes");
const connectDB = require("./database");

const app = express();
const port = 3000;

app.use(express.json());

connectDB().then(() => {
  console.log("Conectado ao MongoDB");
});

app.use("/user", routes);

app.get("/", (req, res) => res.send("Testando rota"));
app.listen(port, () =>{
  console.log(`Servidor está funcionando na porta ${port}`);
});