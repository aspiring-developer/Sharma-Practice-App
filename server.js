const express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let mongodb = require('mongodb');

//let connectionstrings = mongodb+srv://user1:Data001$@cluster0.wuaz2.mongodb.net/List-Item-Database-12262020?retryWrites=true&w=majority;

app.use(express.static(__dirname));
//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
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
  <title>Sharma Practice App</title>
</head>

<body>
  <div class="container mainWrapper">
    <header>
      Welcome to ...
      <h1>List Item Creating App </h1>
    </header>
    <div class="formWrapper">
      <form action="/item-list" method="POST">
        <div class="form-group">
        <label for="userInput"> Enter Item Name: </label>
        <input type="text" class="form-control" name="userInput" autofocus placeholder="Item name"  />
        <button class="btn btn-info addButton"> Add Item </button>
        </div>
      </form>
    </div>
  </div>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>`);
});

app.post('/item-list', function (req, res) {
  //db.collection("List-Item-Collection-12262020").
let userEnteredValue = req.body.userInput;
 console.log("Post method is working!");
 console.log(userEnteredValue);
// return userEntered;
res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link href="styles/reset.css" rel="stylesheet" />
  <link href="styles/mainStyle.css" rel="stylesheet" />
  <title>Sharma Practice App</title>
</head>

<body>
  <div class="container mainWrapper">
    <header>
       <h1>This is Item List Page </h1>
       displaying after submitting form.
    </header>
  </div>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>`);
});

app.listen(port, function () {
  console.log(`App is running on Port: http://localhost:${port} `)
});