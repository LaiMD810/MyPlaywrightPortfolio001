import {expect, Page} from '@playwright/test'


export class CheckoutInformationPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async enterYourInformation(firstname:string,lastname:string,postcode:string){
        await expect(this.page.locator('[data-test="title"]')).toHaveText("Checkout: Your Information")
        await this.page.getByPlaceholder("First Name").fill(firstname)
        await this.page.getByPlaceholder("Last Name").fill(lastname)
        await this.page.getByPlaceholder("Zip/Postal Code").fill(postcode)

        await this.page.getByRole('button',{name:"Continue"}).click()
    }
}



    