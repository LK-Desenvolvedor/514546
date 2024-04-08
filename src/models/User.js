const mongoose = require("mongoose");
class User {
  constructor({ nome, email, senha }) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}

const userSchema = new mongoose.Schema(
  {
    nome: { 
        type: String, required: true 
    },
    email: { 
        type: String, required: true, unique: true 
    },
    senha: { 
        type: String, required: true 
    },
  },
  { timestamps: true }
);

userSchema.loadClass(User);

module.exports = mongoose.model("User", userSchema);