const sql = require('./dbConfig')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())


app.get("/testget", (req, res) => {
    res.send("Hello World")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    // res.send({'username':req.body.username ,'p1assword':req.body.password})
    const email = req.body.username;
    sql.query(`select * from users where email = ?`, [email], (err, res) => {
        if (err) {
            console.log('errrr',err)
            // result(null, err);
            // return;
        }
        console.log('ressss',res)
        // result(null, res);
    });


})

app.listen("3001", () => {
    console.log('server running on port:3001')
})