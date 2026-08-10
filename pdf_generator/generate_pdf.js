const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = 'file://' + path.join(__dirname, 'nomination.html');
    console.log("Loading HTML:", htmlPath);
    
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(__dirname, '..', 'Vineet_Sansare_UAE_Golden_Residency_Nomination.pdf');
    console.log("Saving PDF to:", pdfPath);
    
    await page.pdf({
        path: pdfPath,
        width: '1920px',
        height: '1080px',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    
    console.log("Done.");
    await browser.close();
})();
