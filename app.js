const save = require('./yurei.json');
const { getScreenshot } = require('./utils/WebIO');


process.on('uncaughtException', function(err) {
    console.log(`\x1b[7m\x1b[31m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m ERROR @ '${err}'`);
});

function init() {
<<<<<<< Updated upstream
    console.log('[|||||||||||||||||||||||||||||||||||||||||||||]');
    console.log('                   Y U R E I');
    console.log('[|||||||||||||||||||||||||||||||||||||||||||||]\n');
    console.log(`Scraping Content from prnt.sc (v${save.version})\n`);
    loadLastKey();
}

async function loadLastKey() {
    while (true) {
        const key = stringGen(6);
        await getScreenshot(key);
        console.log(`[ Y U R E I ${new Date().toISOString()} ] Trying Key '${key}'`);
    }
=======
    console.log('\x1b[7m[|||||||||||||||||||||||||||||||||||||||||||||]\x1b[0m')
    console.log('\x1b[36m                   \x1b[7mY U R E I\x1b[0m')
    console.log('\x1b[7m[|||||||||||||||||||||||||||||||||||||||||||||]\x1b[0m\n')
    console.log(`Scraping Content from prnt.sc (v${save.version})\n`)
    loadLastKey()
}

async function loadLastKey() {
    const key = stringGen(6)
    await getScreenshot(key)
    console.log(`\x1b[7m[ Y U R E I ${new Date().toISOString()} ]\x1b[0m Trying Key '${key}'`)
    await loadLastKey()
>>>>>>> Stashed changes
}

function stringGen(len) {
    let text = '';

    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

<<<<<<< Updated upstream
init();
=======
init()
>>>>>>> Stashed changes
