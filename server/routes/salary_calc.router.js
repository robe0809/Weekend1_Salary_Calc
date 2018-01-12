const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool');

router.post('/', (req, res) => {
    const queryText = `INSERT INTO salaries ( first_name, last_name, id_number, job_title, annual_salary, monthly_salary)
    VALUES ($1, $2, $3, $4, $5, $6);`
    pool.query(queryText, [ 
        req.body.firstName, 
        req.body.lastName,
        req.body.idNumber, 
        req.body.jobTitle,
        req.body.annualSalary,
        req.body.monthlySalary
        ])
        .then((result) => {
            console.log('successfully posted: ', result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error: ', err);
            res.sendStatus(500);
        })
})
module.exports = router;