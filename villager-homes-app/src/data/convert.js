const fs = require('fs');

// edit the file paths on line 5 and line 10 to convert additional CSV files to JSON 
// template src/data/raw/xxx.csv

const csvFilePath='src/data/Villagers.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  fs.writeFileSync("src/data/villagers.json", JSON.stringify(jsonObj, null, 2))
})

// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
