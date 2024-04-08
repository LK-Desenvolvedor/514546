const mongoose = require("mongoose");
const db_Key = require("./db_Key/key");

const connectDB = async () => {
  try {
    await mongoose.connect(db_Key, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log('Conectado ao banco de dados comm sucesso!');
    }catch(error){
        console.error('Conexão com o banco de dados falhou','error.message');
        process.exit(1);
    }
}

//mongodb+srv://lkdesenvolvedor:pGbJl66xbHT4loDR@cluster1.t4pnoeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
//lOPpPeeXDhWNbF63
module.exports = connectDB;