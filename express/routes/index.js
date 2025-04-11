var express = require('express');
var router = express.Router();
const fs = require('fs');
const SEC = "https://data.sec.gov/api/xbrl/companyfacts/"
var cors = require('cors')

const app= express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   let rawdata = fs.readFileSync('../../DATA/company_tickers.json');
//   let companies = JSON.parse(rawdata);
//   //res.setHeader('Content-Type', 'application/json');
//   res.json(companies)
//   //res.render('index', { title: 'Express', companies: companies });
// });

router.get('/', function(req, res, next) {

  fetch('https://www.sec.gov/files/company_tickers.json')
  .then((response) => response.json())
  .then((body) => {
    res.json(body)
});
});

router.get('/ren/:cik', function(req, res, next) {
  

  //let rawdata = fs.readFileSync('../../DATA/companyfacts/'+req.params.cik);

const uri = SEC + req.params.cik

console.log('calling ' + uri)

fetch(uri)
  .then((response) => response.text())
  .then((body) => {
    
let xbrl = JSON.parse(body);

res.render('ren', {name: xbrl["facts"]} );
      //console.log(body);
});

});



module.exports = router;
