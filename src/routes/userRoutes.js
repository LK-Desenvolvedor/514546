const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/exemplo", (req, res) => {
  res.json({ message: "Rota Get Funcionando" });
});

router.post("/exemplo", (req, res) => {
  const { body } = req.body;
  res.json({
    message: `Post rodando com o
        corpo: ${body}`,
  });
  console.log(body);
});

router.get("/", userController.getAllUsers); 
router.post("/", userController.createUser); 
router.put("/:id", userController.updateUser); 
router.delete("/:id", userController.deleteUser); 
router.get("/:id", userController.getUserById); 

module.exports = router;
