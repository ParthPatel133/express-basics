const fs = require('fs');
let text = fs.readFileSync("sample.txt", "utf-8");
text = text.replace("sample", "edited");

console.log('the content of this file is:');
console.log(text);

fs.writeFileSync("sampleUpdated.txt", text);