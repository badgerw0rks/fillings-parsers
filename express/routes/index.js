var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let rawdata = fs.readFileSync('../../DATA/company_tickers.json');
  let companies = JSON.parse(rawdata);
  res.render('index', { title: 'Express', companies: companies });
});

router.get('/ren/:cik', function(req, res, next) {
  

  let rawdata = fs.readFileSync('../../DATA/companyfacts/'+req.params.cik);
  let xbrl = JSON.parse(rawdata);

  res.render('ren', {name: xbrl["facts"]} );
});



module.exports = router;
