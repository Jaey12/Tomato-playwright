const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.workEmail = page.locator("input[name$='email']");
    this.passwordEye = page.locator("path[fill='#121E23']");
    this.loginButton = page.locator("button[type='submit']");
    this.newPassword = page.locator("#newPassword");
    this.confirmNewPassword = page.locator("#confirmNewPassword");
    this.setPasswordButton = page.getByRole('button', { name: "Set Password" });
    this.passwordSuccess = page.getByText("Success!");
    this.loginLink = page.getByRole('link', { name: "Log In" });
    this.loginWorkMail = page.locator("input[placeholder='john.smith@company.com']");
    this.loginPassword = page.getByTestId("login-password-input");
    this.loginFinalButton = page.getByRole('button', { name: "Log In" });
  }

  async login(email) {
    await this.workEmail.fill(email);
    await this.passwordEye.click();
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();
  }

  async createPassword(password) {
    await expect(this.newPassword).toBeVisible();
    await this.newPassword.fill(password);
    await this.confirmNewPassword.fill(password);
    await expect(this.setPasswordButton).toBeEnabled();
    await this.setPasswordButton.click();
    await expect(this.passwordSuccess).toBeVisible();
    await this.loginLink.click();
  }

  async finalLogin(email, password) {
    await this.loginWorkMail.fill(email);
    await this.loginPassword.fill(password);
    await expect(this.loginFinalButton).toBeEnabled();
    await this.loginFinalButton.click();
  }
};
