const express = require('express');
const router = express.Router();
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
//api in postman needs to be structured like this ---->  localhost:4000/api/craftbeers/YOUR FLAVOR HERE 
router.get("/craftbeers/:flavor", async (req, res) => {
  const {flavor} = req.params;
  // Send back list of craftbeers with selected flavor
  console.log('reached the endpoint')
  try {
     // Modified endpoint with a JOIN statement to get the breweries info for the craftbeers returned in the results.
    // Perform database query to fetch craft beers based on flavor and join with breweries
    const query = `
      SELECT cb.*, b.*
      FROM craftbeers cb
      JOIN breweries b ON cb.breweries_id = b.id
      WHERE cb.flavor LIKE '%${flavor}%'
      ORDER BY RAND()
      LIMIT 5;
    `;
    const results = await db(query);
    console.log(`The results are: ${results}`);
    // Send JSON response with the fetched data
    res.json(results);
    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send(err);
  }
});


//get craftbeers by type_style 
// router.get("/craftbeers/:type_style", async (req, res) => {
//   const {type_style} = req.params;
//   // Send back list of craftbeers with selected flavor
//   console.log('reached the endpoint')
//   try {
//     const typeQuery =`SELECT * FROM craftbeers WHERE type_style LIKE '%${type_style}%';`;
//     const typeResults = await db(typeQuery);
//     //console.log(`The results are: ${results}`);
//     res.send(typeResults.data);
    
//   } catch (err) {
//     console.error("Error occurred:", err);
//     res.status(500).send(err);
//   }
// });
const validateData = (data) => {
  // console.log(data.answer1,data.answer2,data.answer3);
  return data && data.answer1 && data.answer2 && data.answer3;
};

// Use the craft beers router
router.post("/craftbeers/recommendations", async (req, res) => {
  // Get quiz answers from the request body
  const { answer1, answer2, answer3 } = req.body;
   console.log(`'this is my req.body'${req.body}`);

  // Validate the incoming data
  if (!validateData(req.body)) {
    return res.status(400).send({ error: 'Please provide answers to all quiz questions' });
  }
  
  try {
    let abvCondition;
    if (answer3 === 'low') {
      abvCondition = 'ABV <= 5';
    } else if (answer3 === 'high') {
      abvCondition = 'ABV >= 6';
    } else {
      return res.status(400).send({ error: 'Invalid answer for ABV range' });
    }

    const query = `
      SELECT * FROM craftbeers
      WHERE (flavor LIKE ? OR flavor LIKE ?)
      AND ${abvCondition}
      ORDER BY RAND()
      LIMIT 2;
    `;
    const values = [`%${answer1}%`, `%${answer2}%`];
    db.query(query, values, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal server error' });
  }
});


module.exports = router;
