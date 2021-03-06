var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= { 
'article-one' : {
    title : 'article-one bhuvaneshwar',
    heading :'Article-one',
    date :'October 1',
    content : 
              `<p>i am bhuvaneshwar and i am a champion i will be a olympian in 2020 olympic games which iws to be held on tokyo japan.i will be a part of india's proud moment in 2020 i am a champion i will be a champion 
               </p>
                <p> I  will fisnish my arrears in my nov/dec exams and i am gonna win the game of my life
                </p>`
},
'article-two' :{ 
    title : 'article-two bhuvaneshwar',
    heading :'Article-two',
    date :'October 1',
    content : 
              `<p>i am bhuvaneshwar and i am a champion i will be a olympian in 2020 olympic games which iws to be held on tokyo japan.i will be a part of india's proud moment in 2020 i am a champion i will be a champion 
               </p>
                <p> I  will fisnish my arrears in my nov/dec exams and i am gonna win the game of my life
                </p>`},
'article-three' : {
    title : 'article-three bhuvaneshwar',
    heading :'Article-one',
    date :'October 1',
    content : 
              `<p>i am bhuvaneshwar and i am a champion i will be a olympian in 2020 olympic games which iws to be held on tokyo japan.i will be a part of india's proud moment in 2020 i am a champion i will be a champion 
               </p>
                <p> I  will fisnish my arrears in my nov/dec exams and i am gonna win the game of my life
                </p>}`}
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = "container">
            <a href= "/"> home</a>
            <hr/>
            <h3> ${heading}</h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
</html>`;
return htmlTemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
  var name = req.query.name;
  
  names.push(name);
  // JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});


app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName]=={}content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
  var name = req.query.name;
  
  names.push(name);
  // JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
