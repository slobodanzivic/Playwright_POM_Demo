exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textBox = page.getByLabel('Username')
        this.password_textBox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })

    }

    async goToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password) {

        await this.username_textBox.fill(username)
        await this.password_textBox.fill(password)
        await this.login_button.click()
    }


}