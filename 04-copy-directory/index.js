
const fs = require('fs');
const path = require('path');
  
fs.mkdir(path.join(__dirname, 'files-copy'),
  { recursive: true}, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });
  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
        console.log(err)}
    else {
        console.log(files)
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
                if (err) {
                    console.log(err)}
                }
        )})

    }})