export function generateRandomString ():string {
    const randomString = Math.random().toString(36).substring(2,5);
    console.log(randomString);
    return randomString;

};