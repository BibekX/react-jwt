const express = require("express");
const config = require("./config.js");
const jwt = require("jsonwebtoken");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const cors = require("cors");
const auth = require("./auth");
const app = express();

console.log("auth", auth(knex).initialize());

app.use(cors());
app.use(express.json());

//routing
app.post("/auth/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    const password = req.body.password;

    let query = await knex
      .select("*")
      .from("users")
      .where("email", email)
      .andWhere("password", password)
      .first();

    if (query) {
      let payload = { id: query.id };
      let token = jwt.sign(payload, config.jwtSecret);
      res.json({
        token: token,
      });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.listen(8000, () => console.log("Listening to port 8000"));
