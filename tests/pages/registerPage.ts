import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export default class ResgisterUser {
    page: Page;
    firstName: Locator;
    lastName: Locator;
    eMail: Locator;
    telephone: Locator;
    password: Locator;
    confrimPassword: Locator;
    subscribe: Locator;
    privacy: Locator;
    submit: Locator;
    successMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator("#input-firstname");
        this.lastName = page.locator("#input-lastname");
        this.eMail = page.locator("#input-email");
        this.telephone = page.locator("#input-telephone");
        this.password = page.locator("#input-password");
        this.confrimPassword = page.locator("#input-confirm");
        this.subscribe = page.locator("//label[@for='input-newsletter-no']");
        this.privacy = page.locator("//label[@for='input-agree']");
        this.submit = page.locator("//input[@type='submit']");
        this.successMessage = page.locator("//h1[@class='page-title my-3']");


    }

    async fillRegistrationForm(firstName:string, lastName:string, eMail:string,telephone:string, password:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.eMail.fill(eMail);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confrimPassword.fill(password);
        
        


    }

    async submitForm(){
        await this.subscribe.click();
        await this.privacy.click();
        await this.submit.click();
    }

    async verifyRegistration(){
            await expect(this.successMessage).toHaveText(" Your Account Has Been Created!");
            
    }

}