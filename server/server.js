const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
const salaryRouter = require('./routes/salary_calc.router');
// routes
app.use('/employee', salaryRouter);

app.listen(port, function () {
    console.log('Server up on port: ', port);
})