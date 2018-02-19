var fs = require("fs");
var filename = process.argv[2];
var file = fs.readFileSync(filename);
var contentFile = file.toString();
console.log((contentFile.split('\n').length)-1);