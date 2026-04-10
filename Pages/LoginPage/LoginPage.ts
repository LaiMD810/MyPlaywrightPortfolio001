import {expect, Page} from '@playwright/test'
import { LoginPage_Locator } from './LoginPage_Locator'


export class LoginPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async testLogin(username:string,password:string){
        await this.page.getByRole('textbox',{name:LoginPage_Locator.firstNameInputGetByRole}).fill(username)
        await this.page.getByRole('textbox',{name:LoginPage_Locator.passwordInputGetByRole}).fill(password)
        await this.page.getByRole('button',{name:LoginPage_Locator.loginButtonGetByRole}).click()
        
    }
}



    