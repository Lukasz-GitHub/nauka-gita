var os = require('os');

// Przeliczanie sekund
function timeConvert(sec) {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor(sec / 60) % 60;
    var seconds = Math.floor(sec % 60);
    var time = hours + 'h ' + minutes + 'm ' + seconds + 's';
    return time;
}
exports.print = timeConvert;