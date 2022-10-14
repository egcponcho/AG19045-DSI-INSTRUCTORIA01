import * as fs from 'fs';

const fileName1 = process.argv.slice(2);
const fileName2 = process.argv.slice(3);

let fileContent1 = fs.readFileSync(fileName1[0], 'utf8');

if (fs.existsSync(fileName2[0])) {
    let fileContent2 = fs.readFileSync(fileName2[0], 'utf8');

    fs.writeFileSync(fileName2[0], fileContent2 + "\n\n" + fileContent1);
} else if (fileName2[0] == null) {
    let name = fileName1[0].slice(0, -4)

    name = name + " - copy.txt"

    fs.writeFileSync(name, fileContent1);
} else {
    fs.writeFileSync(fileName2[0], fileContent1);

    fs.readFileSync(fileName2[0], 'utf8');
}

