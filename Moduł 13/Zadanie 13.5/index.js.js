'use strict';

var os = require('os');
var OSinfo = require('./modules/OSinfo')

process.stdin.setEncoding('utf-8');
process.stdout.write('\nInstruction:\n1. /version\n2. /getOSinfo\n3. /exit\n\n');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '1':
            case '/version':
                process.stdout.write('Node version: ' + process.versions.node + '\nModule number: ' + process.versions.modules + '\n\n');
                break;
            case '2':
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '3':
            case '/exit':
                process.stdout.write('Quitting app!\n\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});