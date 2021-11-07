const T = require('tesseract.js');
const textdata = require('../textdata.json');
const fs = require('fs');

function imageToText(path) {
    T.recognize(path, 'eng', {
        logger: (e) => {
            console.log(
                `\x1b[7m\x1b[33m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Tesseract Log: ${JSON.stringify(e)}`
            );
        },
    }).then((result) => {
        console.log(
            `\x1b[7m\x1b[32m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Tesseract Result: ${JSON.stringify(
                result.data.text
            )}`
        );
        textdata.scanned.push(result.data.text);
        fs.writeFile('./textdata.json', JSON.stringify(textdata), 'utf-8', () => {
            console.log(
                `\x1b[7m\x1b[32m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Saved: ${JSON.stringify(
                    result.data.text
                )}`
            );
        });
    });
}

//
module.exports = { imageToText };
