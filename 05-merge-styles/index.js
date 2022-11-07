const fs = require('fs');
const path = require('path');
const db = require('db');
fs.writeFile(path.join(__dirname,'project-dist','bundle.css'),'',
(err) => {
    if (err) throw err;
}
);

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err) {
        console.log(err)}
    else {
        console.log(files)
        files.forEach(file => {
            if (path.extname(file)==='.css'){
                fs.createReadStream(path.join(__dirname, 'styles',file), 'utf-8').on('data', (chunk) => fs.appendFile(path.join(__dirname,'project-dist','bundle.css'),chunk, err => {
                    if (err) throw err;
                }))
            }
         })

    }})