var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.send({ title: 'Express' })
});

//GET all breweries
router.get("/breweries", async (req, res) => {
  // Send back the full list of breweries
  console.log('reached the endpoint')
  try {
    const query = "SELECT * FROM breweries ORDER BY id;";
    const results = await db(query);
    //console.log(`The results are: ${results}`);
  

    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});
//get breweries by id
router.get("/breweries/:id", async (req, res) => {
  const {id} = req.params;
  // Send back the full list of breweries
  console.log('reached the endpoint')
  try {
    const query =`SELECT * FROM breweries WHERE id = ${id};`;
    const results = await db(query);
    //console.log(`The results are: ${results}`);
    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});
//get full list of craftbeers
router.get("/craftbeers", async (req, res) => {
  // Send back the full list of craftbeers
  console.log('reached the endpoint')
  try {
    const query = "SELECT * FROM craftbeers ORDER BY id ASC;";
    const results = await db(query);
    //console.log(`The results are: ${results}`);
   //

    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});
//get back list of craftbeer according to the flavor
//api in postman needs to be structured like this ---->  localhost:4000/craftbeers/your flavor choice here 
router.get("/craftbeers/:flavor", async (req, res) => {
  const {flavor} = req.params;
  // Send back the full list of craftbeers
  console.log('reached the endpoint')
  try {
    const query =`SELECT * FROM craftbeers WHERE flavor LIKE '%${flavor}%';`;
    const results = await db(query);
    //console.log(`The results are: ${results}`);
    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});
module.exports = router;
