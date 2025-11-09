// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('../../companyfacts/', 'utf8'));

const fs = require('fs');

const directoryPath = './../../companyfacts/'; // Replace with your directory path

try {
  const files = fs.readdirSync(directoryPath);
  //console.log('Files in directory:', files);
  // 'files' is an array of strings, where each string is the name of a file or subdirectory.
  for (let i = 0; i < files.length; i++ ){
    try {
    const data = fs.readFileSync('./../../companyfacts/'+files[i], 'utf8');
    console.log(data);
    } catch (err) {
    console.error(err);
    }
}
} catch (err) {
  console.error('Error reading directory synchronously:', err);
}