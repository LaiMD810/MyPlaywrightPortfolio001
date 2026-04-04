import {expect, Page} from '@playwright/test'
import { Checkout_InformationPage_Locator } from './Checkout_InformationPage_Locator'


export class CheckoutInformationPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async enterYourInformation(firstname:string,lastname:string,postcode:string){
        await expect(this.page.locator(Checkout_InformationPage_Locator.title)).toHaveText(Checkout_InformationPage_Locator.titleText)
        await this.page.getByPlaceholder(Checkout_InformationPage_Locator.firstNameInputPlaceholder).fill(firstname)
        await this.page.getByPlaceholder(Checkout_InformationPage_Locator.lastNameInputPlaceholder).fill(lastname)
        await this.page.getByPlaceholder(Checkout_InformationPage_Locator.zipInputPlaceholder).fill(postcode)

        await this.page.getByRole('button',{name:Checkout_InformationPage_Locator.continueButton}).click()
    }
}



    