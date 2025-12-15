// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('../../companyfacts/', 'utf8'));

// scipt to take data from company facts jsons for a day and put it into the database

const { MongoClient } = require('mongodb');

// Replace the uri string with your connection string
const uri = 'mongodb://localhost:27017/?directConnection=true';
const client = new MongoClient(uri);
const database = client.db('xbrl');
const companyfacts = database.collection('companyfacts');
// async function runGetStarted() {
//   try {
//     // Queries for a movie that has a title value of 'Back to the Future'
//     //const query = { title: 'Back to the Future' };
//     //const companyfact = await companyfacts.findOne(query);
//     //console.log(companyfact);
//   } finally {
//     await client.close();
//   }
// }
//runGetStarted().catch(console.dir);
const fs = require('fs');

const directoryPath = './../../companyfacts/'; // Replace with your directory path
async function run() {
try {
  const files = fs.readdirSync(directoryPath);
  //console.log('Files in directory:', files);
  // 'files' is an array of strings, where each string is the name of a file or subdirectory.
  for (let i = 0; i < files.length; i++ ){
    try {
    const data = fs.readFileSync('./../../companyfacts/'+files[i], 'utf8');
    const data_obj = JSON.parse(data)

    const result = await companyfacts.insertOne(data_obj);
    // console.log(
    //   `A document was inserted with the _id: ${result.insertedId}`,
    // );


    //console.log(data);


    } catch (err) {
    console.error(err);
    }
}
} catch (err) {
  console.error('Error reading directory synchronously:', err);
}
}

run().catch(console.dir);