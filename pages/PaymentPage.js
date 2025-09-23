const { expect } = require('@playwright/test');

exports.PaymentPage = class PaymentPage {
  constructor(page) {
    this.page = page;
    this.cardNumberFrame = page.frameLocator('iframe[title="Secure card number input frame"]');
    this.expDateFrame = page.frameLocator('iframe[title="Secure expiration date input frame"]');
    this.cvcFrame = page.frameLocator('iframe[title="Secure CVC input frame"]');
    this.cardHolderName = page.locator("#cardHolderName");
    this.zip = page.locator("#zip");
    this.buyNowButton = page.getByRole('button', { name: "Buy Now" });
  }

  async makePayment(cardNumber, expiry, cvc, holder, zip) {
    await this.cardNumberFrame.locator('input[name="cardnumber"]').fill(cardNumber);
    await this.expDateFrame.locator('input[name="exp-date"]').fill(expiry);
    await this.cvcFrame.locator('input[name="cvc"]').fill(cvc);
    await this.cardHolderName.fill(holder);
    await this.zip.fill(zip);
    await this.buyNowButton.click();
  }
};
