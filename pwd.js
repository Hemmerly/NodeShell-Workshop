const fs = require('fs')

const input = process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();

    if (cmd === 'pwd'){        
        console.log(__dirname)
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
}) 


module.exports = {input,}