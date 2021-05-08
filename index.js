const express = require('express')
const path = require('path')
var db;
var app = express();
const mongoDB = require("mongodb");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((err) => {
    const collection = client.db("quizDatabase").collection("quizDatabase");
    console.log("Connected to DB");

    db = client.db();
});

let server = app.listen(process.env.PORT || 5000, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
});


app.get("/", (req, res) =>{
    res.send("connect to postman");}
);
app.get("/quizzes/", function (req, res) {

    db.collection("quizDatabase")
        .find({})
        .toArray(function (err, docs) {
            if (err) {
                handleError(res, err.message, "Failed to get quizzes.");
            } else {
                res.status(200).json(docs);
            }
        });
});

//”Endpoint to get a summary of a single quiz with submissions.
app.get("/quiz/:id", function (req, res) {
    const id = req.params.id;
    var o_id = new mongoDB.ObjectID(id);
    db.collection("quizDatabase").findOne({ _id: o_id }, function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get quizzes.");
        } else {
            res.status(200).json(docs);
        }
    });
});


//”Endpoint to create a new quiz.
app.post("/new/",function (req, res)  {
    let body = JSON.parse(JSON.stringify(req.body));
    var question;
    console.log(body);
    db.collection("quizDatabase").insertOne(body, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new quiz.");
        } else {
            res.status(201).send(JSON.stringify(body));
            console.log(JSON.stringify(body._id));

        }
    });
});

//”Endpoint to submit a single quiz result
app.post("/quiz/:id", function (req, res) {
    let body = req;
    console.log(body);
    db.collection("quizDatabase").insertOne(body, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new quiz.");
        } else {
            res.status(201).send(JSON.stringify(body));
        }
    });
});

// Generic error handler used by all endpoints
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ error: message });
}
