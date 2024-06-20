const express = require("express");
const app = express();
require("dotenv").config();
let userRoutes = require('./routes/userRoutes');

// parse requests of content-type -application / json
let dbConnect = require("./dbConnect");
app.use(express.json());
app.use('/api/users', userRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MySQl application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port
${PORT}.`);
});