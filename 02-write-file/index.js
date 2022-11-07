const path = require('path');
const fs = require('fs');
    fs.writeFile(
        path.join(__dirname, 'mynotes.txt'),'',
        (err) => {
            if (err) throw err;
        }
    );

process.stdout.write('Введите текст \n');
process.stdin.on('data', (data) => {
    if (`${data.toString().toLowerCase()}`=='exit'){
        console.log(11)
        process.exit()
    }
    fs.appendFile(
        path.join(__dirname, 'mynotes.txt'),
        `${data}`,
        err => {
            if (err) throw err;
            console.log('Файл был изменен');
        }
    );
});