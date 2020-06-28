const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/our_editions", (req, res) => {
    res.render("our_editions");
});

app.listen(port, err => {
    if (err) return console.log(err);
    console.log(`Server started listening at ${port}`);
});