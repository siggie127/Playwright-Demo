import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export default class CheckoutPage {
    readonly page: Page;
    readonly newAdress: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address1: Locator;
    readonly city: Locator;
    readonly postCode: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly billingaddres: Locator;
    readonly paymentMethodRadio: Locator;
    readonly flatShippingRate: Locator;
    readonly termsConditions: Locator;
    readonly submitButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newAdress = page.locator("(//label[@class= 'custom-control-label'])[2]"); 
        //this.newAdress = page.locator("(//label[text()='I want to use an existing address']");
        this.firstName = page.locator("//input[@id='input-payment-firstname']");
        this.lastName = page.locator("//input[@id='input-payment-lastname']");
        this.address1 = page.locator("//input[@id='input-payment-address-1']");
        this.city = page.locator("//input[@id='input-payment-city']");
        this.postCode = page.locator("//input[@id='input-payment-postcode']");
        this.country = page.locator("//select[@id='input-payment-country']");
        this.state = page.locator("//select[@id='input-payment-zone']");
        this.billingaddres = page.locator("(//input[@type='checkbox'])[1]");
        this.paymentMethodRadio = page.locator("//input[@type='radio' and @name='payment_method']");
        this.flatShippingRate = page.locator("//input[@type='radio' and @name='shipping_method']");
        this.termsConditions = page.locator("//label[@for='input-agree']");
        this.submitButton = page.locator("//button[@id='button-save']")

    }

    async selectNewBillingAddress() {
        await this.newAdress.waitFor({state:"visible"});
        await this.newAdress.click();
    }

    async fillBillingDetails(firstName: string, lastName: string, address1: string, city: string, postCode: string, country: string, state: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.address1.fill(address1);
        await this.city.fill(city);
        await this.postCode.fill(postCode);
        await this.country.selectOption(country);
        await this.state.selectOption(state);

    }

    async isDeliverandShippingAddressesSame() {
        await expect(this.billingaddres).toBeChecked();
    }

    async ispaymentMethodSelected() {
        await expect(this.paymentMethodRadio).toBeChecked();
    }

    async selectTermsAndConditions() {
        await this.termsConditions.check();
    }
    async clickOnContinue() {
        await this.submitButton.click();
    }

}