const express = require('express')
const app = express()


app.set('view engine', 'ejs')
 //middleware
// app.use(function (req, res, next) {
//     console.log("Middleware working")
//     next()
// });

//rendering index.ejs file
app.get('/', function (req, res) {
    res.render('index')
})

// //rendering contact.ejs file     
// app.get('/contact', function (req, res) {
//     res.render('contact')
// })

//static route
// app.get('/profile', function (req, res) {
//     res.send("Hello profile")
// })

// //dynamic route
// app.get("/profile/:username", function (req, res) {
//     res.send(`Hello ${req.params.username}`)
// })

app.get("/profile", function (req, res) {
    res.render('profile')

})

app.listen(3000)