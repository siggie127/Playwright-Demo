import test from "playwright/test";
import LoginPage from "../../pages/loginPage";
import testData from "../../data/testData.json";



test("Login Test", async({page, baseURL})=>{
    await page.goto(baseURL+"/index.php?route=account/login");
     let loginPage = new LoginPage(page);
     await loginPage.doLogin(testData.email, testData.password);
     await loginPage.verifyLogin();
})