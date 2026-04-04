import {expect, Page} from '@playwright/test'
import { Checkout_OverviewPage_Locator } from './Checkout_OverViewPage_Locator'

export class CheckoutOverviewPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCheckoutOverviewPage(productList:string[]){
        await expect(this.page.locator(Checkout_OverviewPage_Locator.title)).toHaveText(Checkout_OverviewPage_Locator.titleText)
        
         for (const product of productList) {
             await expect(this.page.locator(Checkout_OverviewPage_Locator.inventory_Name).filter({ hasText: product })).toBeVisible()
        }
        await this.page.getByRole('button',{name:Checkout_OverviewPage_Locator.finishButton}).click()
        
    }
}
