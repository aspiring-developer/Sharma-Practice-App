let express = require('express');
const mongodb= require('mongodb');
let PORT = process.env.PORT || 3000;
let bodyParser = require('body-parser');

let app = express();

let db;
let connectionString = 'mongodb+srv://user1:Data001$@cluster0.wuaz2.mongodb.net/myData?retryWrites=true&w=majority';

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
db = client.db()
app.listen(PORT, function() {
  console.log(`The app is running on: http://localhost:3000`)
})
});

app.use(express.static(__dirname));
//app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/', function(req, res) {
  db.collection('myCollection').find().toArray(function(err, allItems) {
//console.log(allItems);
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
        <form action="#" method="POST">
          <div class="form-group">
          <label for="userInput"> Enter Item Name: </label>
          <input type="text" class="form-control" name="userInput" autofocus placeholder="Item name"  />
          <button class="btn btn-info addButton"> Add Item </button>
          </div>
  <div class="row ulWrapperRow">
  <ul>
  ${allItems.map(function(singleItem) {
    return `<div class="col liCol"> <li> <span class="singleItem"> ${singleItem.textSS} </span>
    <button data-id="${singleItem._id}" class="btn btn-success editButton"> Edit </button>
    <button class="btn btn-danger deleteButton"> Delete </button> </li> </div> `
    }).join('')}
   </ul>
  </div>

        </form>
      </div>
    </div>

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="browserScript.js"></script>
  </body>
  </html>`)
  })

});

app.post('/item-list', function(req, res) {
  db.collection('myCollection').insertOne({textSS: req.body.userInput}, function() {
    res.redirect('/')
  })
})

app.post('/update-item', function(req, res) {
  db.collection('myCollection').findOneAndUpdate({_id: new mongodb.ObjectId(req.body.idSS)}, {$set: {textSS: req.body.textSS}}, function() {
res.send('Success!');

  })
})
