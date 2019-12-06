const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(3333, () => {
    console.log("server is runnig on port: 3333");
});