// var a = require('one-liner-joke')
// console.log(a.getRandomJoke().body)

// var fig = require('figlet')
// fig("vijay", function (err, data) {
// 	if (err) {
// 		console.log(err)

// 	}
// 	else {
// 		console.log(data)
// 	}

// })


var exp = require('express')
var app = exp()

app.get("/home1", function (req, res) {
	res.send("hello 1india")
})

app.use(function (req, res, next) {
	console.log("middleware running")
	next()
})

app.get("/home", function (req, res) {
	res.send("hello india")
})


app.get("/", function (req, res) {
	res.send("hello man")
})

app.listen(3000);