const path = require('path');
const fs = require('fs');
fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
    if (err) {
        console.log(err)}
    else {
        console.log(files)
      files.forEach(file => {
        let a=file
        let b=path.extname(file)
        //let c='i'
        
        console.log(file);
        console.log(path.extname(file));
        fs.stat(path.join(__dirname, 'secret-folder',file), (error, stats) => {
            if (error) {
                console.log(error)} 
            else {
                let res=`${a}-${b}-${stats.size/1000}`
                console.log(res);
            }
          })
          
      })
    }
  })