const { expect } = require('@playwright/test');

exports.SignupPage = class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupButton = page.locator("a[title='Register']");
    this.companyName = page.locator("input[placeholder='Company']");
    this.firstName = page.locator("input[placeholder='First Name']");
    this.lastName = page.locator("input[placeholder='Last Name']");
    this.emailID = page.locator("input[placeholder='john.smith@company.com']");
    this.signupCheckbox = page.locator("#terms");
    this.signupTerms = page.locator("label[for='terms']");
    this.signupSubmit = page.locator("button[type='submit']");
    this.signupMessage = page.locator(".O9zr00Fk");
    this.loginButtonInSuccess = page.getByText('Go to Log In');
  }

  async signup(company, first, last, email) {
    await this.signupButton.click();
    await this.companyName.fill(company);
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.emailID.fill(email);
    await this.signupCheckbox.click();
    await expect(this.signupTerms).toBeVisible();
    await expect(this.signupSubmit).toBeEnabled();
    await this.signupSubmit.click();
    await expect(this.signupMessage).toBeVisible();
    await this.loginButtonInSuccess.click();
  }
};
