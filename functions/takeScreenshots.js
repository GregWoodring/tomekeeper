const puppeteer = require('puppeteer');

const takeScreenshot = async (link) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    const takePicture = new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            await page.screenshot({path: `./screenshots/${1234}.png`});
            resolve();
        }, 5000);
    });

    await takePicture.then(() => {
        console.log('took picture');
    });
    
    await browser.close();
};

module.exports = takeScreenshot;