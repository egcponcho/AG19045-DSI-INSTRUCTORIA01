"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName1 = process.argv.slice(2);
var fileName2 = process.argv.slice(3);
var fileContent1 = fs.readFileSync(fileName1[0], 'utf8');
if (fs.existsSync(fileName2[0])) {
    var fileContent2 = fs.readFileSync(fileName2[0], 'utf8');
    fs.writeFileSync(fileName2[0], fileContent2 + "\n\n" + fileContent1);
}
else if (fileName2[0] == null) {
    var name_1 = fileName1[0].slice(0, -4);
    name_1 = name_1 + " - copy.txt";
    fs.writeFileSync(name_1, fileContent1);
}
else {
    fs.writeFileSync(fileName2[0], fileContent1);
    fs.readFileSync(fileName2[0], 'utf8');
}
