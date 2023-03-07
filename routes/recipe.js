var express = require('express');
var router = express.Router();

let recepts = [
    {receptName:"pancakes", description:"Stir the batter. The eggs should go in last. Fry in sufficiently thick plates. Served with jam and cream", ingredients:"2 eggs, 6 dl flour, 10 dl milk, a little butter", preptime:"15"},
    {receptName:"Sausage with pasta and kethup", description:"Cook the pasta and fry the sausage. Add ketchup. Enjoy your meal!", ingredients:"400 g pasta, 8 sausages, a dab of ketchup", preptime:10},
    {receptName:"Pumpkin soup", description:"Oven-roasted pumka in smaller cubes. Fry finely chopped onion, carrot and celery in a buttered pan. Add pumpkin and water. Boil together and mix. Served with bread.", ingredients:"2 onions,1 large carrot, 1 butternut squash, water", preptime:30}
]

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/


/*------------------------------- Kod för att visa recept -------------------------------------- */

router.get('/', function(req, res, next) {

    res.json(recepts);
    console.log(recepts);
  });

  module.exports = router;

/*--------------------------------Kod för att hantera tillägg av ny användare-------------------------------*/

router.post('/', function(req, res, next) {
  
    let newRecipe = req.body;
    newRecipe.id = recepts.length + 1;
    recepts.push(newRecipe);
    console.log(newRecipe);
  
    res.json(newRecipe.id);
  });
  
  module.exports = router;