import {expect, Page} from '@playwright/test'
import { ProductPage_Locator } from './ProductPage_Locator'


export class ProductPage{
    private readonly page:Page
    constructor(page: Page){
        this.page = page
    }

    async selectProduct(productNames:string[]){
        await expect(this.page.locator(ProductPage_Locator.title)).toHaveText(ProductPage_Locator.titleText)
        
        const inventoryList = await this.page.locator(ProductPage_Locator.inventoryList).all()
        for(const inventory of inventoryList){
            const inventoryName = await inventory.locator(ProductPage_Locator.inventoryName).textContent()
            if(inventoryName && productNames.includes(inventoryName)){
                await inventory.getByRole('button',{name:ProductPage_Locator.addtoCartButton}).click()
            }
            
        }
        await this.page.locator(ProductPage_Locator.shopCartButton).click()
      

    }
}