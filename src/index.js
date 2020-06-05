const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const indexRoute = require("./routes/index");

const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(indexRoute);

// Middleware
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function() {
  console.log(`Server on port: ${PORT}`);
});
