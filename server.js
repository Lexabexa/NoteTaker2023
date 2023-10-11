//server and dependencies
const express = require('express');
const app = express();//creates express app
const fs = require('fs');
const path = require('path');
//add routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


//PORT heroku or local
const PORT = process.env.PORT || 3000;

//middleware json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});