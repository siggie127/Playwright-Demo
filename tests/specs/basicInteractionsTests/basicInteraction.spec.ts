import {test, expect} from "@playwright/test";

test.beforeEach("Load page", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");  
});

test("basic interactions", async({page})=>{
 
const inputField = page.locator("(//input[@id='user-message'])[1]"); 
const checkValueButton = page.locator("(//button[@type='button'])[1]");
let inputValue = "test";
await inputField.fill(inputValue);
await checkValueButton.click();
//await page.locator("(//input[@id='user-message'])[1]").fill("test");
//await page.locator("(//button[@type='button'])[1]").click();
const resultText = page.locator("(//p[@class='mt-20'])[1]");
await expect(resultText).toHaveText(inputValue);

});

test("Sum test", async({page})=>{
    //await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo"); 
    //const inputFiledOne = page.locator("sum1"); 
    const inputFiledOne = page.locator("//form[@id='gettotal']//input[1]");
    //const inputFiledTwo = page.locator("sum2");  
    const inputFiledTwo = page.locator("(//form[@id='gettotal']//input)[2]"); 
    const getSumButton = page.locator("(//button[@type='button'])[2]");
    const sum = page.locator("(//p[@class='mt-20'])[2]");
    let inputOne = 123;
    let inputTwo =321;
    await inputFiledOne.fill(""+inputOne);
    await inputFiledTwo.fill(""+inputTwo);
    //await getSumButton.scrollIntoViewIfNeeded();
    await getSumButton.click();
    let expectedResult = inputOne+inputTwo
    await expect(sum).toHaveText(""+expectedResult);

});

