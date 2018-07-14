var os = require('os');
var colors = require('colors');
var timeConvert = require('./timeConventer.js'); // importuję moduł z funkcją timeConvert();

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'osx';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System: '.red, type.underline);
    console.log('Realase: '.yellow, release.rainbow);
    console.log('CPU model: '.blue, cpu.bgBlue);
    console.log(colors.green('Uptime: ~'), timeConvert.print(uptime)); // wywołuje funkcję z argumentem uptime który zawiera czas pracy systemu
    console.log(colors.magenta('User name: '), userInfo.username.bold);
    console.log(colors.black.bgWhite('Home dir: ', userInfo.homedir), '\n');
}
exports.print = getOSinfo;