//const { urlencoded } = require("body-parser");
const express = require("express");
let app = express();

let port = process.env.PORT || 3000;


app.use(express.static(__dirname));
//app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link href="styles/reset.css" rel="stylesheet" />
  <link href="styles/mainStyle.css" rel="stylesheet" />
  <title>Sharma Fine Arts</title>
</head>

<body>
  <div class="container mainWrapper">
  <header>
  <h2>Welcome to my site!!!!!!!!</h2>
  </header>
  <div class="formWrapper">
  <form action="/item-list" method="POST">
<div class="form-group">
<label for="userInput"> Enter your Name: </label>
<input type="text" class="for-control" placeholder="your name" name="userInput" />
<button class="btn btn-info"> Submit </button>
</div>

  </form>
  </div>
</div>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>`);
})
app.listen(port, function() {
  console.log(`App is running on Port: http://localhost:${port} `)
});