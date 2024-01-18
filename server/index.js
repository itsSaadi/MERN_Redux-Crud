const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./userModel");

app.use(express.json());
app.use(cors({
  origin:["https://mern-redux-crud-client.vercel.app"],
  method:["POST","GET","PUT","DELETE"],
  credentials:true
  ));
mongoose.connect("mongodb://localhost:27017/reduxcrud");

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/create", (req, res) => {
  userModel.create(req.body).then((resp) => res.json(resp));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({
      _id: id,
    })
    .then((resp) => res.json(resp));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      {
        _id: id,
      },
      { name: req.body.name, email: req.body.email, contact: req.body.contact }
    )
    .then((resp) => res.json(resp));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
