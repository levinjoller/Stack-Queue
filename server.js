const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/", express.static("./"));

app.post("/element", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.listen(3333, () => {
    console.log("server is runnig on port: 3333");
});