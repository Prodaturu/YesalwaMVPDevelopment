const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get("/api", (req, res) => {
	res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});