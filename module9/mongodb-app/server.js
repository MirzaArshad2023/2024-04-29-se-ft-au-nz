const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');

// parse requests of content-type -application/json
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.use('/api/users', userRoutes);

app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);
});