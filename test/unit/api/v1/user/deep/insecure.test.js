const { exec } = require('child_process');

// Deep nested command injection
function run(cmd) {
    exec(cmd);
}

run("whoami");
