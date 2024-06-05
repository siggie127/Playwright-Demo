import test from "playwright/test";
import ResgisterUser from "../../pages/registerPage";
import testData from "../../data/testData.json";
import {generateRandomString} from "../../utils/utils.ts"

test("User Registration Test", async({page, baseURL})=>{
   await page.goto(baseURL+"/index.php?route=account/register"); 
   let resgisterUser = new ResgisterUser(page);
   let randomEmail = `user_${generateRandomString()}@gmail.com`;
   console.log(randomEmail);
   await resgisterUser.fillRegistrationForm(testData.firstname, testData.lastname, randomEmail, testData.telephone, testData.password);
   await resgisterUser.submitForm();
   await resgisterUser.verifyRegistration();


});