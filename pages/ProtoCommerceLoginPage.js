exports.ProtoCommerceLogin = class ProtoCommerceLogin {

    constructor (page){

        this.page = page
        this.shopLink = page.getByRole("link",{name : "Shop"})
        this.common_item_locator = page.locator("app-card")
        this.checkoutBtn = page.locator(".nav-link.btn.btn-primary")

    }


    async goToLoginPage() {

        await this.page.goto("https://rahulshettyacademy.com/angularpractice/")
    }

    async clickOnShopLink(){
        await this.shopLink.click();
    }

    async clickAddBtnOnNokiaEdge(){
        await this.common_item_locator.filter({hasText : 'Nokia Edge'}).getByRole("button", {name : "Add"}).click();

    }



  
}