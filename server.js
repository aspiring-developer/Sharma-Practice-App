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
 <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

  <link href="styles/reset.css" rel="stylesheet" />

  <title>Sharma Fine Arts</title>
</head>

<body>
  <div class="mainWrapper">
  <header>
  <div class="row">
  <h2>Welcome to my site!!!!!!!!</h2>
  </div>
  </header>
</div>
</body>

</html>`);
})
app.listen(port, function() {
  console.log(`App is running on Port: http://localhost:${port} `)
});