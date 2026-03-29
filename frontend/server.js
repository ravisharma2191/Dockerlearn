const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Form submit
app.post("/submit", async (req, res) => {
    const formData = req.body;

    try {
        const response = await axios.post("http://backend:5000/process", formData);
        res.send(response.data);
    } catch (error) {
        res.send("Error connecting to backend");
    }
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});