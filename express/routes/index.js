var express = require('express');
var router = express.Router();
const SEC = "https://data.sec.gov/api/xbrl/companyfacts/CIK"

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





router.get('/company/:cik', function(req, res, next) {


  const {params={} , body }=req;

  console.log(params)
    console.log(body)
  

  //let rawdata = fs.readFileSync('../../DATA/companyfacts/'+req.params.cik);

var pre  = "0".repeat(10 - params?.cik.toString().length)

const uri = SEC + pre + params?.cik+'.json'

console.log('calling ' + uri)

fetch(uri)
  .then((response) => response.json())
  .then((body) => {

    res.json(body)
    
// let xbrl = JSON.parse(body);

// res.render('ren', {name: xbrl["facts"]} );
      //console.log(body);
});

});



module.exports = router;
