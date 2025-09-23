const { test } = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage');
const { LoginPage } = require('../pages/LoginPage');
const { PaymentPage } = require('../pages/PaymentPage');

test.only('Tomato WebApp Smoke test', async ({ page }) => {
  const signup = new SignupPage(page);
  const login = new LoginPage(page);
  const payment = new PaymentPage(page);
  //const dashboard = new DashboardPage(page);
  //const license = new LicensePage(page);

  // Test Data
  const email = "jayasurya+176test@tomato.ai";
  const password = "Jayasurya123!";

  await page.goto("https://stgapp.tomato.ai/login");

  // Signup
  //await signup.signup("QAoncloud", "Jay", "Surya", email);

  // Login (OTP step is manual pause)
  //await login.login(email);
  //await page.pause();
  //await login.createPassword(password);
  await login.finalLogin(email, password);

  // Payment
  //await payment.makePayment("4242424242424242", "12/34", "123", "Jay S", "1543");

  
});
