const express = require('express');

const app = express();

const PORT = 4000;

// Let the application know we are using EJS as a template engine:
app.set("view engine", "ejs"); 

// Let the application know we are serving static assets: 
app.use(express.static('public'));

// Let the application know we wish to parse incoming request bodies that are URL-encoded
// and make the parsed data available in the req.body object:  
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('main/index'); 
});

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
}); 