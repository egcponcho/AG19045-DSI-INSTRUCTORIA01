import * as fs from 'fs';

class File {
    name: string[];

    constructor(nameFile: string[]) {
        this.name = nameFile;
    }

    readFile() {
        let content = fs.readFileSync(this.name[0], 'utf8');
        console.log(content);
    }
}

const nameFile = process.argv.slice(2);

let file = new File(nameFile);

file.readFile()