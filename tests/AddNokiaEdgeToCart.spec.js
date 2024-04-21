import{test, expect} from '@playwright/test'
import { ProtoCommerceLogin } from '../pages/ProtoCommerceLoginPage'

test('Add Nokia Edge to Cart', async({page}) =>{

    const protoLogin = new ProtoCommerceLogin(page)
    await protoLogin.goToLoginPage()
    await protoLogin.clickOnShopLink()
    await protoLogin.clickAddBtnOnNokiaEdge()

    await expect (protoLogin.checkoutBtn).toContainText(" Checkout ( 1 )")

    await page.pause();
    


});