import { expect } from "@playwright/test";

export class LicensePage {
  constructor(page) {
    this.page = page;

    // ======================
    // License Page Locators
    // ======================
    this.licenseTab = page.locator("a[class='license-tab-step-1'] span");
    this.licenseHeading = page.locator("div[class='VA7eHce_'] h1");
    this.licenseName = page.getByText("Name");
    this.licenseKey = page.getByText("License Key");
    this.billingPeriod = page.getByText("Billing Period");
    this.renewalDate = page.getByText("Auto-Renewal Date");
    this.licenseSeats = page.locator("#licenses-modal").getByText("Seats", { exact: true });
    this.licenseCostPerSeat = page.getByText("Cost Per Seat");

    // values
    this.licenseSeatCount = page.locator(
      "div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)"
    );
    this.licenseInstalls = page.locator(
      "div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)"
    );
    this.licenseTotalCost = page.locator("span:has-text('Total Cost')");

    // Auto-pay
    this.autoPayToggle = page.locator(".ant-switch-handle");
    this.autoPayClose = page.locator("button[class='Xkz1j0df U8VkvNQW mjX0nMbQ']");
    this.autoPayConfirm = page.locator("button[class='Xkz1j0df c8HpHkJn mjX0nMbQ']");
  }

  // ======================
  // License Page Methods
  // ======================

  async openLicenseTab() {
    await this.licenseTab.click();
  }

  async validateLicenseElements() {
    const elements = [
      this.licenseHeading,
      this.licenseName,
      this.licenseKey,
      this.billingPeriod,
      this.renewalDate,
      this.licenseSeats,
      this.licenseSeatCount,
      this.licenseInstalls,
      this.licenseTotalCost,
      this.licenseCostPerSeat,
    ];

    for (const element of elements) {
      await expect(element).toBeVisible();
      const text = await element.textContent();
      console.log(`✅ Element visible: ${text?.trim()}`);
    }
  }

  async disableAutoPay() {
    await this.autoPayToggle.click();
    await this.autoPayClose.click();
    await this.autoPayToggle.click();
    await this.autoPayConfirm.click();
    console.log("Auto pay is off");
  }

  async enableAutoPay() {
    await this.autoPayToggle.click();
    await this.autoPayConfirm.click();
    console.log("Auto pay is on");
  }
}
