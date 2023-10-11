//server and dependencies
import express from 'express';
const app = express();//creates express app
import { join } from 'path';
//add routes
import apiRoutes from './routes/apiRoutes.js';
import htmlRoutes from './routes/htmlRoutes.js';

//PORT heroku or local
const PORT = process.env.PORT || 3000;

//middleware json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join('public')));
// add routes
apiRoutes(app);
htmlRoutes(app);

//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});