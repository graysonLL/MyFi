const express = require("express");
const cors = require("cors");
const sequelize = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Unable to connect to database:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
