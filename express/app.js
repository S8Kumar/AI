const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send("Hii");
// })

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

const path = require('path');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index.html',{});
  //__dirname : It will resolve to your project folder.
});

// const path = require('path')
// app.use('/site', express.static(path.join(__dirname, '/home.html')));

//app.set('views', __dirname + '/views'); 
//app.set('view engine', 'html');

// var homeRouter = require('./routes/home')
// app.use('/home', homeRouter)