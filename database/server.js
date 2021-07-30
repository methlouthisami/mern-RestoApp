const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const connectDB = require("./db");
const morgan = require("morgan");
connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
