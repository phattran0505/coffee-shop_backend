const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const menuRoutes = require("./routes/menu");
const app = express();

// connect database
database.connect();

// middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.use("/api/v1/menu", menuRoutes);

app.listen(4000, (req, res) => {
  console.log("connect server successfully");
});
