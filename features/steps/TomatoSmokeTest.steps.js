const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

/* ======================
   Scenario: Navigate to Tomato app
   ====================== */
Given('I navigate to the Tomato application', async function () {
  await this.page.goto("https://stgapp.tomato.ai/login");
});


/* ======================
   Scenario: User signs up successfully
   ====================== */
When('I click on the Register button', async function () {
  await this.page.locator("a[title='Register']").click();
});

When('I enter company name {string}', async function (company) {
  await this.page.locator("input[placeholder='Company']").fill(company);
});

When('I enter first name {string}', async function (firstname) {
  await this.page.locator("input[placeholder='First Name']").fill(firstname);
});

When('I enter last name {string}', async function (lastname) {
  await this.page.locator("input[placeholder='Last Name']").fill(lastname);
});

When('I enter email {string}', async function (email) {
  await this.page.locator("input[placeholder='john.smith@company.com']").fill(email);
});

When('I accept the terms and conditions', async function () {
  await this.page.locator("#terms").click();
});

When('I submit the signup form', async function () {
  await this.page.locator("button[type='submit']").click();
});

Then('I should see the signup congratulation message', async function () {
  await expect(this.page.locator(".O9zr00Fk")).toBeVisible();
});

Then('I click on {string} button', async function (btnText) {
  await this.page.getByText(btnText).click();
});


/* ======================
   Scenario: User logs in and sets password
   ====================== */
When('I enter work email {string}', async function (email) {
  await this.page.locator("input[name$='email']").fill(email);
});

When('I enter OTP manually', { timeout: 120000 }, async function () {
  console.log("⏳ Please enter OTP manually in the browser...");
  const submitBtn = this.page.locator("button[type='submit']");
  await submitBtn.waitFor({ state: 'visible', timeout: 120000 }); // wait until button is visible
  await submitBtn.click();
});


Then('I should be navigated to the Create Password page', async function () {
  await expect(this.page.getByText("Create Password")).toBeVisible();
});

When('I enter new password {string}', async function (password) {
  await this.page.locator("#newPassword").fill(password);
});

When('I confirm new password {string}', async function (password) {
  await this.page.locator("#confirmNewPassword").fill(password);
});

When('I click on Set Password button', async function () {
  const button = this.page.getByRole('button', { name: "Set Password" });
  await expect(button).toBeEnabled();
  await button.click();
});

Then('I should see success message', async function () {
  await expect(this.page.getByText("Success!")).toBeVisible();
});

Then('I click on {string} link', async function (linkText) {
  await this.page.getByRole('link', { name: linkText }).click();
});


/* ======================
   Scenario: User logs in with new password
   ====================== */
When('I enter login email {string}', async function (email) {
  await this.page.locator("input[placeholder='john.smith@company.com']").fill(email);
});

When('I enter password {string}', async function (password) {
  await this.page.getByTestId("login-password-input").fill(password);
});

When('I click on Log In button', async function () {
  const loginBtn = this.page.getByRole('button', { name: "Log In" });
  await expect(loginBtn).toBeEnabled();
  await loginBtn.click();
});

Then('I should be logged in successfully and land on payment screen', { timeout: 60000 }, async function () {
  const cardFrame = this.page.frameLocator('iframe[title="Secure card number input frame"]');
  const cardInput = cardFrame.locator('input[name="cardnumber"]'); // actual input inside iframe
  await cardInput.waitFor({ state: 'visible', timeout: 60000 });
  await expect(cardInput).toBeVisible();
});

/* ======================
   Scenario: User completes payment
   ====================== */
When('I enter card number {string}', async function (cardnumber) {
  const frame = this.page.frameLocator('iframe[title="Secure card number input frame"]');
  await frame.locator('input[name="cardnumber"]').fill(cardnumber);
});

When('I enter expiry date {string}', async function (expdate) {
  const frame = this.page.frameLocator('iframe[title="Secure expiration date input frame"]');
  await frame.locator('input[name="exp-date"]').fill(expdate);
});

When('I enter CVC {string}', async function (cvc) {
  const frame = this.page.frameLocator('iframe[title="Secure CVC input frame"]');
  await frame.locator('input[name="cvc"]').fill(cvc);
});

When('I enter card holder name {string}', async function (name) {
  await this.page.locator("#cardHolderName").fill(name);
});

When('I enter zip code {string}', async function (zip) {
  await this.page.locator("#zip").fill(zip);
});

When('I click on Buy Now button', async function () {
  await this.page.getByRole('button', { name: "Buy Now" }).click();
});

Then('I should see the Quick Start Guide', async function () {
  await expect(this.page.getByText("Quick Start Guide")).toBeVisible();
});


/* ======================
   Scenario: Dashboard Flow
   ====================== */
Then('I should be on the Dashboard page', async function () {
  await expect(this.page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});

Then('I should see the dashboard date selector', async function () {
  await expect(this.page.getByPlaceholder("Start date")).toBeVisible();
});

When('I open the dashboard dropdown', async function () {
  const dropdown = this.page.locator('.ant-select-selector');
  await expect(dropdown).toBeVisible();
  await dropdown.click();
});

When('I select {string}', async function (option) {
  await expect(this.page.getByText(option)).toBeVisible();
  await this.page.getByText(option).click();
});

When('I open the dashboard dropdown again', async function () {
  const dropdown = this.page.locator('.ant-select-selector');
  await dropdown.click();
});

Then('I should see the dashboard graphs', async function () {
  await expect(this.page.locator(".obdi6ffL.yBdan0WZ")).toBeVisible();
  await expect(this.page.getByText("Daily Seats")).toBeVisible();
  await expect(this.page.getByText("Max Daily Actives")).toBeVisible();
  await expect(this.page.getByText("Min Daily Inactives")).toBeVisible();
});


/* ======================
   Scenario: License Flow
   ====================== */
When('I click on the License tab', async function () {
  await this.page.locator("a[class='license-tab-step-1'] span").click();
});

Then('I should see license details', async function () {
  const licenseElements = [
    this.page.locator("div[class='VA7eHce_'] h1"),                // heading
    this.page.getByText("Name"),
    this.page.getByText("License Key"),
    this.page.getByText("Billing Period"),
    this.page.getByText("Auto-Renewal Date"),
    this.page.locator('#licenses-modal').getByText('Seats', { exact: true }),
    this.page.locator("div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)"), // seat count
    this.page.locator("div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)"), // installs
    this.page.locator("span:has-text('Total Cost')"),
    this.page.getByText("Cost Per Seat")
  ];

  for (const element of licenseElements) {
    await expect(element).toBeVisible();
    const text = await element.textContent();
    console.log(`✅ Element visible: ${text?.trim()}`);
  }
});

When('I toggle auto-pay off', async function () {
  await this.page.locator(".ant-switch-handle").click();
  await this.page.locator("button[class='Xkz1j0df U8VkvNQW mjX0nMbQ']").click();   // close
  await this.page.locator("button[class='Xkz1j0df c8HpHkJn mjX0nMbQ']").click();   // confirm
});

Then('I should see {string}', async function (msg) {
  await expect(this.page.getByText(msg)).toBeVisible();
});

When('I toggle auto-pay on', async function () {
  await this.page.locator(".ant-switch-handle").click();
  await this.page.locator("button[class='Xkz1j0df c8HpHkJn mjX0nMbQ']").click();
});
