const express = require("express");
const app = express();
const path = require ("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("servidor corriendo en puerto http://localhost:3000")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})
