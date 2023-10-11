const express = require("express");
const path = require('path');
const app = express();

// Set the views directory
// app.set("views", path.join(__dirname, "views"));

// Set the view engine to Handlebars
app.set("view engine", "hbs");

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, "../public")));

// Define your routes
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/projects", function (req, res) {
    res.render("projects");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
