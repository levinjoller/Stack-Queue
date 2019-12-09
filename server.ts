import * as express from "express";
import * as bodyParser from "body-parser";
import DFS from "./lib/DataStructureFactory";
import Structure from "./lib/Structure";
import IDataStructure from "./lib/IDataStructure";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

let elements: IDataStructure; 

app.use("/", express.static("./"));

app.get("/pollfirstelement", (req, res) => {
    if (elements != null) {
        if (!elements.isEmpty()) {
            res.send(`
            ${elements.peek()}
            <br>
            <a href="http://127.0.0.1:8080">Zurück</a>`
        );
        elements.poll();
        }else{
            res.redirect("/");
        }
    }else{
        res.redirect("/");
    }

});

app.post("/element", (req, res) => {
    if (req.body.datastructure == "queue") {
        if (elements == null) {
            elements = DFS.create(Structure.FIFO);
        }else if (elements.isEmpty()) {
            elements = DFS.create(Structure.FIFO);
        }
    }else{
        if (elements == null) {
            elements = DFS.create(Structure.LIFO);
        }else if (elements.isEmpty()) {
            elements = DFS.create(Structure.LIFO);
        }
    }
    elements.add(req.body.element);
    res.redirect("/");
});

app.listen(8080, () => {
    console.log("server is runnig on port: 8080");
});