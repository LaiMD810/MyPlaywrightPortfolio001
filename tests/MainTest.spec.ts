//import {test,expect} from '@playwright/test'
//import { PageManager } from '../Pages/pageManager'
import testData from '../ProductTestData/ProductsTobeSelected.json'
import { test, expect } from './Fixtures/fixtures';



// test.beforeEach(async({page})=>{
//      await page.goto('https://www.saucedemo.com/')
     
// })

for (const product of testData.Products){
    test.describe("Main  Test", ()=>{
        test(`Product Selection - E2E Flow ${product.name}`,async ({pm})=>{

        //Product  page
        await pm.onProduct().selectProduct(product.selected_Products)

        //Cart Page  
        await pm.onCart().verifyCartItem(product.selected_Products)

        //Checkout Your Information Page
        await pm.onCheckoutInformation().enterYourInformation("first","Last","10001")

        //Check Overview page
        await pm.onCheckoutOverview().verifyCheckoutOverviewPage(product.selected_Products)
    
        //Check Complete Page
        await pm.onCheckoutComplete().verifyCompletedMesssage()

        })
    })

}

