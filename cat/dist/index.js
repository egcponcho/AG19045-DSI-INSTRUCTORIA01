"use strict";
exports.__esModule = true;
var fs = require("fs");
var File = /** @class */ (function () {
    function File(nameFile) {
        this.name = nameFile;
    }
    File.prototype.readFile = function () {
        var content = fs.readFileSync(this.name[0], 'utf8');
        console.log(content);
    };
    return File;
}());
var nameFile = process.argv.slice(2);
var file = new File(nameFile);
file.readFile();
