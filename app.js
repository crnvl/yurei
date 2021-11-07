const save = require('./yurei.json');
const { getScreenshot } = require('./utils/WebIO');

process.on('uncaughtException', function (err) {
    console.log(`\x1b[7m\x1b[31m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ERROR @ '${err}'`);
});

function init() {
    console.log('[|||||||||||||||||||||||||||||||||||||||||||||]');
    console.log('                   Y U R E I');
    console.log('[|||||||||||||||||||||||||||||||||||||||||||||]\n');
    console.log(`Scraping Content from prnt.sc (v${save.version})\n`);
    loadLastKey();
}

async function loadLastKey() {
    const key = stringGen(6);
    await getScreenshot(key);
    console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Trying Key '${key}'`);
    await loadLastKey();
}

function stringGen(len) {
    let text = '';

    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

init();
