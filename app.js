const save = require("./yurei.json");
const { getScreenshot } = require("./utils/WebIO");

function init() {
  console.log("[|||||||||||||||||||||||||||||||||||||||||||||]");
  console.log("                   Y U R E I");
  console.log("[|||||||||||||||||||||||||||||||||||||||||||||]\n");
  console.log(`Scraping Content from prnt.sc (v${save.version})\n`);
  loadLastKey();
}

async function loadLastKey() {
  while (true) {
    const key = stringGen(6);
    await getScreenshot(key);
    console.log(
      `[ Y U R E I ${new Date().toISOString()} ] Trying Key '${key}'`
    );
  }
}

function stringGen(len) {
  let text = "";

  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}

init();
