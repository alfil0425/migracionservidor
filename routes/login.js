/*const express = require("express");
const jwt = require("jsonwebtoken");
const authJWT = require("../Middleware/verificacion");
const router = express.Router();

const users = {
  user: "mauricio",
  password: 123456,
};

router.post("/", (req, res) => {
  const { user, password } = req.body;
  console.log(user, password);

  if (user === users.user && password === users.password) {
    const data = {
      rol: "Admin",
      status: true,
    };

    const token = jwt.sign(data, KEY);

    console.log(token);

    return res.status(200).send({ token });
  } else {
    return res.status(400).send("Usuario o contraseña erronea");
  }
});

router.get("/users", authJWT, (req, res) => {
  const data = req.data;
  res.send(data);
  /*try {
    const token = req.headers.authorization;
console.log(token);
    const verify = jwt.verify(token, KEY);

    res.send("Lista de Usuarios");
  } catch (error) {
    console.log("error: >>", error);
    res.status(500).send("token invalido");
  }*/
/*});

module.exports = router;*/
