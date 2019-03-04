//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user type in a line
process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();

    if (cmd === 'pwd'){        
        console.log(__dirname)
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
})