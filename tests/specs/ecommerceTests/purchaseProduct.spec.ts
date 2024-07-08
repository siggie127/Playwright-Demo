import  {test, expect } from "playwright/test";
import LoginPage from "../../pages/loginPage";
import testData from "../../data/testData.json"

test("purchaseProduct", async({page, baseURL})=>{

    await page.goto(baseURL+"/index.php?route=account/login");
    const logingPage = new LoginPage(page);
    await logingPage.doLogin(testData.email, testData.password);
    expect(page).toHaveTitle("My Account");
});