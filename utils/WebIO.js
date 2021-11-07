const axios = require('axios');
const fs = require('fs');
const request = require('request');
const {imageToText} = require("./TextDetect");

async function getScreenshot(key) {
    await axios
        .get(`https://prnt.sc/${key}`)
        .then((response) => {
            const sourcecode = response.data;
            const re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
            const s = sourcecode;
            let m;

            do {
                m = re.exec(s);
                if (m) {
                    const m1 = m[1].toString().trim();
                    if (m1.startsWith('/image/')) {
<<<<<<< Updated upstream
                        const now = new Date();
                        console.log(`[ Y U R E I ${now.toISOString()} ] Found ${m1}`);

                        download('https://image.prntscr.com' + m1, `./content/${m1.replace('/image/', '')}`, () => {
                            console.log(`[ Y U R E I ${new Date().toISOString()} ] Downloaded ${m1}`);
                        });
=======
                        const now = new Date()
                        console.log(`\x1b[7m\x1b[34m[ Y U R E I ${now.toISOString()} ]\x1b[0m Found ${m1}`)

                        download('https://image.prntscr.com' + m1, `./content/${m1.replace('/image/', '')}`, () => {
                            console.log(`\x1b[7m\x1b[36m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Downloaded ${m1}`)
                            imageToText(`./content/${m1.replace('/image/', '')}`)
                        })
>>>>>>> Stashed changes
                        break;
                    }
                }
            } while (m);
<<<<<<< Updated upstream
        })
        .catch((error) => {
            console.log(`[ Y U R E I ${new Date().toISOString()} ] Error ${error}`);
        });
}

const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log(`[ Y U R E I ${new Date().toISOString()} ] ${res.headers['content-type']}`);
        console.log(`[ Y U R E I ${new Date().toISOString()} ] ${res.headers['content-length']}`);
=======
        }).catch((error) => {
            console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Error ${error}`)
        });
}

const download = async function (uri, filename, callback) {
    await request.head(uri, async function (err, res, body) {
        console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ${res.headers['content-type']}`)
        console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ${res.headers['content-length']}`)
>>>>>>> Stashed changes

        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

module.exports = { getScreenshot };
