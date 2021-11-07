const axios = require("axios");
const fs = require("fs");
const request = require("request");

async function getScreenshot(key) {
  await axios
    .get(`https://prnt.sc/${key}`)
    .then((response) => {
      const sourcecode = response.data;
      const re =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      const s = sourcecode;
      let m;

      do {
        m = re.exec(s);
        if (m) {
          const m1 = m[1].toString().trim();
          if (m1.startsWith("/image/")) {
            const now = new Date();
            console.log(`[ Y U R E I ${now.toISOString()} ] Found ${m1}`);

            download(
              "https://image.prntscr.com" + m1,
              `./content/${m1.replace("/image/", "")}`,
              () => {
                console.log(
                  `[ Y U R E I ${new Date().toISOString()} ] Downloaded ${m1}`
                );
              }
            );
            break;
          }
        }
      } while (m);
    })
    .catch((error) => {
      console.log(`[ Y U R E I ${new Date().toISOString()} ] Error ${error}`);
    });
}

const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log(
      `[ Y U R E I ${new Date().toISOString()} ] ${res.headers["content-type"]}`
    );
    console.log(
      `[ Y U R E I ${new Date().toISOString()} ] ${
        res.headers["content-length"]
      }`
    );

    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

module.exports = { getScreenshot };
