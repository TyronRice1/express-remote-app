var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function (req, res, next) {
  var places = [
  { name: 'Home', rating: 10 },
  { name: 'Busch Gardens', rating: 9 },
  { name: 'Washington D.C.', rating: 5 },
  { name: 'Kings Dominion', rating: 6 },
  { name: 'Virginia Beach', rating: 5 }
  ];

  var myname = "Tyron Rice";
res.render('index', {
title: 'Favorite Places',
places: places,
myname: myname
});
});
  
module.exports = router;
