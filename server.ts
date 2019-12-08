import * as express from "express";
import * as bodyParser from "body-parser";
import DFS from "./lib/DataStructureFactory";
import Structure from "./lib/Structure";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

let test = DFS.create(Structure.LIFO);

app.use("/", express.static("./"));

app.post("/element", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.listen(8080, () => {
    console.log("server is runnig on port: 8080");
});