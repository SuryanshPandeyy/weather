
const path = require('path');
// const requests = require('requests');
// const { Navigator } = require("node-navigator");
const express = require('express');
// require('dotenv').config();
const app = express();
// const hbs = require('hbs');
const port = process.env.PORT || 8000;
// app.use(express.json())

app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "hbs");

// app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`🌏 Server is running at http://localhost:${port}`)
})