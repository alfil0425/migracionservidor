const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());


const login = require("./routes/login");
const listViewRouter = require("./routes/list-view-router.js");
const listEditRouter = require("./routes/list-edit-router.js");

function validateHTTPMethods(req, res, next) {
const validMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ error: "Método HTTP no válido" });
    }
  next();
}

app.use(validateHTTPMethods);


app.use(express.json());

app.use("/login", login);
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.listen(process.env.PORT, () =>
  console.log(`server on port ${process.env.PORT}`)
);
