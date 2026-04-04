import {expect, Page} from '@playwright/test'
import { CartPage_Locator } from './CartPage_Locator'


export class CartPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCartItem(productList:string[]){
        await expect(this.page.locator(CartPage_Locator.title)).toHaveText(CartPage_Locator.titleText)
        
        for (const product of productList) {
             await expect(this.page.locator(CartPage_Locator.inventoryName).filter({ hasText: product })).toBeVisible()
        }
        await this.page.getByRole('button',{name:CartPage_Locator.checkoutButton}).click()

    }
}
