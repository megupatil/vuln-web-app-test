const { exec } = require('child_process');

function runCommand(cmd) {
    exec(cmd); // Command Injection ❌
}

module.exports = { runCommand };
