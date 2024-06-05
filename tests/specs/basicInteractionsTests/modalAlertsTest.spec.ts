import {test, expect} from "playwright/test";

test.beforeEach("Page Launch", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
});


test("Modal Alert Test", async({page})=>{
    const launchButton = await page.locator("(//button[contains(@class,'btn btn-dark')])[1]")
    await launchButton.click();
    const closeButton = await page.locator("(//button[@class='btn'])[1]");
    await closeButton.click();
});

test.only("Multiple Modal Alert Test", async({page})=>{
    const launchButtonOne = await page.locator("(//button[contains(@class,'btn btn-dark')])[3]")
    await launchButtonOne.click();
    const modalOneText = await page.locator("(//div[@class='modal-body']//p)[2]").textContent(); 
    console.log(modalOneText);
    const launchButtonTwo = await page.locator("//div[@class='modal-body']//button[1]");
    await launchButtonTwo.click();
    const modalTwoText = await page.locator("(//div[@class='modal-body'])[3]").textContent();
    console.log(modalTwoText);
    await page.locator("(//button[text()='Save Changes'])[3]").click();
    await page.locator("(//button[text()='Save Changes'])[2]").click();


});