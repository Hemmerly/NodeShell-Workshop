const fs = require('fs')


const filesys = fs.readdir('./', 'utf8', (err,files)=>{
    if (err) {
        throw err
    } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write("prompt > ");
    }
})

module.export = {
    filesys,
}