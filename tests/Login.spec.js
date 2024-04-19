import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test('Login test with valid credentials', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.login('tomsmith', 'SuperSecretPassword!')

});