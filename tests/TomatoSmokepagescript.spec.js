const { test } = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage');
const { LoginPage } = require('../pages/LoginPage');
const { PaymentPage } = require('../pages/PaymentPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { licensePage } = require('../pages/LicensePage');

test('Tomato WebApp Smoke test', async ({ page }) => {
  const signup = new SignupPage(page);
  const login = new LoginPage(page);
  const payment = new PaymentPage(page);
  const dashboard = new DashboardPage(page);
  const licensePage = new licensePage(page);
  const seatsPage = new SeatsPage(page);

  // Test Data
  const email = "jayasurya+176test@tomato.ai";
  const password = "Jayasurya123!";

  await page.goto("https://stgapp.tomato.ai/login");

  // Signup
  await signup.signup("QAoncloud", "Jay", "Surya", email);

  // Login (OTP step is manual pause)
  await login.login(email);
  await page.pause();
  await login.createPassword(password);
  await login.finalLogin(email, password);

  // Payment
  await payment.makePayment("4242424242424242", "12/34", "123", "Jay S", "1543");

  //Dashboard
  await dashboard.openDashboard();
  await dashboard.selectDropdownAllAccounts();
  await dashboard.selectDropdownDefault();
  await dashboard.validateGraphs();

  //License
  await licensePage.openLicenseTab();
  await licensePage.validateLicenseElements();
  await licensePage.disableAutoPay();
  await licensePage.enableAutoPay();

  //Seats
  await seatsPage.navigateToSeats();
  await seatsPage.validateTableHeaders();
  await seatsPage.searchSeats("License");

  //Agent
const INVITE_EMAIL = 'jayasurya@qaoncloud.com';
const agent = new AgentPage(page);
await agent.goto(APP_URL);
await agent.verifyDropdownsClickable();
await agent.openMicCheckModal();
await agent.selectDefaultTeam();
await agent.sendInvite(INVITE_EMAIL);
await agent.validateFirstRowHasInvite(INVITE_EMAIL);
console.log(`✅ Invite for ${INVITE_EMAIL} validated in the first row`);
});
