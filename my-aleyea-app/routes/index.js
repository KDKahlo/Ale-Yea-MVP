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
    const breweriesquery = "SELECT * FROM breweries ORDER BY id;";
    const breweriesResults = await db(breweriesquery);
    //console.log(`The results are: ${results}`);
  

    res.send(breweriesResults.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});
//get breweries by id
router.get("/breweries/:id", async (req, res) => {
  const {id} = req.params;
  // Send back brewery selected by id
  console.log('reached the endpoint')
  try {
    const idQuery =`SELECT * FROM breweries WHERE id = ${id};`;
    const idResults = await db(idQuery);
    //console.log(`The results are: ${results}`);
    res.send(idResults.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});

//get breweries by location
//api in postman needs to be structured like this ----> localhost:4000/breweries/location/YOUR CITY HERE
router.get("/breweries/location/:location", async (req, res) => {
  const {location} = req.params;
  //location = location.toLocaleLowerCase(); 
  // Send back list of craftbeers with selected flavor
  console.log('reached the endpoint')
  try {
    const locationQuery =`SELECT * FROM breweries WHERE location = '${location}';`;
    const locationResults = await db(locationQuery);
    //console.log(`The results are: ${results}`);
    res.send(locationResults.data);
    
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
//api in postman needs to be structured like this ---->  localhost:4000/craftbeers/YOUR FLAVOR HERE 
router.get("/craftbeers/:flavor", async (req, res) => {
  const {flavor} = req.params;
  // Send back list of craftbeers with selected flavor
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


//get craftbeers by type_style 
router.get("/craftbeers/:type_style", async (req, res) => {
  const {type_style} = req.params;
  // Send back list of craftbeers with selected flavor
  console.log('reached the endpoint')
  try {
    const typeQuery =`SELECT * FROM craftbeers WHERE type_style LIKE '%${type_style}%';`;
    const typeResults = await db(typeQuery);
    //console.log(`The results are: ${results}`);
    res.send(typeResults.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});

module.exports = router;
