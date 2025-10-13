// seats.page.js
import { expect } from "@playwright/test";

export class SeatsPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.seatsButton = page.locator("a[href='/seats']");

    // Table headers
    this.teamHeader = page.locator("//th[normalize-space()='Team']");
    this.licenseHeader = page.locator("//th[normalize-space()='License']");
    this.seatNameHeader = page.locator("//div[normalize-space()='Seat Name']");
    this.lastActivityHeader = page.locator("//div[normalize-space()='Last Activity']");
    this.installedHeader = page.locator("//th[normalize-space()='Installed']");
    this.activeStatusHeader = page.locator("//th[normalize-space()='Active Status']");
    this.actionsHeader = page.locator("//div[normalize-space()='Actions']");

    // Dropdown + Filters
    this.allAccountsBtn = page.getByText("All Accounts");
    this.firstDropdown = page.locator("//div[@id='agentAccounts']//div[@class='ant-select-selector']");
    this.firstDropdownOption = page.locator("//div[contains(text(),'Default')]");
    this.secondDropdown = page.locator("//div[@id='license']//div[contains(@class,'ant-select-selector')]");
    this.secondDropdownOption = page.locator("//div[contains(text(),'License 1')]");
    this.thirdDropdown = page.locator("//div[@id='status']//div[contains(@class,'ant-select-selector')]");
    this.thirdDropdownActive = page.locator("//div[contains(text(),'Active')]");
    this.thirdDropdownInactive = page.locator("//div[contains(text(),'Inactive')]");
    this.searchPlaceholder = page.getByPlaceholder("Search Seat");

    // Group headers for iteration
    this.tableHeaders = [
      this.teamHeader,
      this.licenseHeader,
      this.seatNameHeader,
      this.lastActivityHeader,
      this.installedHeader,
      this.activeStatusHeader,
      this.actionsHeader,
    ];
  }

  async navigateToSeats() {
    await this.seatsButton.click();
  }

  async validateTableHeaders() {
    for (const header of this.tableHeaders) {
      await expect(header).toBeVisible();
      const text = await header.textContent();
      console.log(`✅ Header visible: ${text?.trim()}`);
    }
    console.log("✅ All table headers are visible");
  }

  async selectDropdowns() {
    await expect(this.allAccountsBtn).toBeVisible();
    await this.allAccountsBtn.click();

    await this.firstDropdown.click();
    await expect(this.firstDropdownOption).toBeVisible();
    await this.firstDropdownOption.click();
    console.log("✅ Default option selected");

    await this.secondDropdown.click();
    await expect(this.secondDropdownOption).toBeVisible();
    await this.secondDropdownOption.click();
    console.log("✅ License 1 option selected");

    await this.thirdDropdown.click();
    await expect(this.thirdDropdownActive).toBeVisible();
    await this.thirdDropdownActive.click();
    console.log("✅ Active option selected");
  }

  async searchSeats(keyword) {
    await this.searchPlaceholder.fill(keyword);
    await this.searchPlaceholder.clear();
    console.log(`✅ Search field tested with: ${keyword}`);
  }
}
