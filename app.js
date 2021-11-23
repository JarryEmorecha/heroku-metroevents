const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(morgan('short'))

app.use(bodyParser.json());

app.set('view engine', 'ejs')


const db = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bc7999f73a5d31',
    password: '06ab209d',
    database: 'heroku_3325fc0cddabd45'
})

//GET
app.get('/getUsers', function(req,res){
    db.query('SELECT * FROM user', (err,rows)=>{
        console.log("success");
        console.log(rows);
        res.json(rows);
    })
    
})

app.listen(port, () => {
    console.log("server is listening on port..")
})



// app.get('/user/:id', (req, res) => {
//     console.log("fetching user with id: " + req.params.id)
//     const userId = req.params.id
//     const queryString = "SELECT * FROM auth_user WHERE id = ?" //& SELECT * FROM user WHERE user_id = ?"
//     connection.query(queryString, [userId], (err, rows, fields) => {
//         if (err) {
//             console.log("failed to query for users:", + err)
//             res.sendStatus(500)
//             return 
//         }
//         console.log("fetched users succesfully")
//         res.json(rows)
//     })


// })
// app.get("/", (req, res) => {
//     console.log("Responding to root route")
//     res.send("hello from root")
// })

// app.get("/users", (req, res) => {
//     var user1 = {firstName: "Diane", lastName: "lambojo"}
//     const user2 = {firstName: "diane", lastName: "gwapa"}

//     res.json([user1, user2])
//     // res.send("nodemon auto updates when i save this file")
// })

