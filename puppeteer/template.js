const puppeteer = require('puppeteer');

//입력 할 텍스트
const insert_name =  "insert_" + Math.random().toString(36).substring(2, 15);
const insert_description = "insert_" + Math.random().toString(36).substring(2, 15);

//수정 할 텍스트
const modi_name = "update_" + Math.random().toString(36).substring(2, 15);
const modi_description = "update_" + Math.random().toString(36).substring(2, 15);

async function run (){

    // 브라우저 열기
    const browser = await puppeteer.launch(); //handless : true
    const page = await browser.newPage();  
    
    page.on("dialog", (dialog) => {
        dialog.accept();
    });
    
    // 웹사이트 로딩
    await page.goto('http://localhost:3000/', {timeout: 0, waitUntil: 'domcontentloaded'});

    // 상단 테이블의 th 제목을 가져오고 싶은경우
    // const tdName = await page.$eval('table tr:nth-child(1) th:nth-child(1)', th => th.textContent.trim() );
    // console.log(tdName);

    await page.waitForSelector('.btn-default');
    await page.click('.btn-default');
    await page.waitForSelector('.btn-primary');
    await page.evaluate( (a, b) => {
        document.querySelector('input[name=name]').value = a;
        document.querySelector('textarea[name=description]').value = b;
        document.querySelector('.btn-primary').click();
    }, insert_name, insert_description);
    
    //수정
    await page.waitForSelector('.btn-default');
    await page.click('table tr:nth-child(2) td:nth-child(1) a');
    await page.waitForSelector('.btn-primary');
    await page.click('.btn-primary');
    await page.waitForSelector('.btn-primary');
    await page.evaluate( (a, b) => {
        document.querySelector('input[name=name]').value = a;
        document.querySelector('textarea[name=description]').value = b;
        document.querySelector('.btn-primary').click();
    }, modi_name, modi_description);


    //삭제
    // await page.waitForSelector('.btn-default');
    // await page.click('.btn-default');
    // await page.waitForSelector('.btn-default');

    // await page.click('btn-danger');

    // 브라우저 닫기
    await browser.close();
}

run();
