import { PlaywrightTestConfig } from "@playwright/test";

const config : PlaywrightTestConfig = {
    testMatch: ["tests/specs/ecommerceTests/regsiterUser.spec.ts"], 

    use:{
        headless:false,
        screenshot:"on",
        video:"on",
        baseURL: "https://ecommerce-playground.lambdatest.io"
        //launchOptions:{slowMo:1000}
        

    },
    retries: 0,
    reporter:[["html",{open:"always"}]],
};

export default config;