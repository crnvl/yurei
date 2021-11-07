const axios = require("axios");
const fs = require("fs");
const request = require("request");
const { imageToText } = require("./TextDetect");

async function getScreenshot(key) {
  await axios
    .get(`https://prnt.sc/${key}`, { timeout: 10000 })
    .then((response) => {
      const sourcecode = response.data;
      const re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      const s = sourcecode;
      let m;

      do {
        m = re.exec(s);
        if (m) {
          const m1 = m[1].toString().trim();
          if (m1.startsWith("/image/")) {
            const now = new Date();
            console.log(`\x1b[7m\x1b[34m[ Y U R E I ${now.toISOString()} ]\x1b[0m Found ${m1}`);

            download("https://image.prntscr.com" + m1, `./content/${m1.replace("/image/", "")}`, () => {
              console.log(`\x1b[7m\x1b[36m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Downloaded ${m1}`);
              imageToText(`./content/${m1.replace("/image/", "")}`);
            });
            break;
          }
        }
      } while (m);
    })
    .catch((error) => {
      console.log(`[ Y U R E I ${new Date().toISOString()} ] Error ${error}`);
    });
}

const download = async function (uri, filename, callback) {
  await request.head(uri, async function (err, res, body) {
    if (res) {
      console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ${res.headers["content-type"]}`);
      console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ${res.headers["content-length"]}`);
      await request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
    }
  });
};

module.exports = { getScreenshot };
