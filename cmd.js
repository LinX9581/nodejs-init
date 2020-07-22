
const { exec } = require('child_process');
exec(`dir`, (err, stdout, stderr) => {
    if (err) {
        return;
    }
    console.log("db-backup")
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});