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
    console.log(`The results are: ${JSON.stringify(results)}`);

    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});

router.get("/craftbeers", async (req, res) => {
  // Send back the full list of craftbeers
  console.log('reached the endpoint')
  try {
    const query = "SELECT * FROM craftbeers ORDER BY id;";
    const results = await db(query);
    //console.log(`The results are: ${results}`);
    console.log(`The results are: ${JSON.stringify(results)}`);

    res.send(results.data);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});


module.exports = router;
