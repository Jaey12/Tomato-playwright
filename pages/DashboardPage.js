import { expect } from "@playwright/test";

export class DashboardPage {
  constructor(page) {
    this.page = page;

    // ======================
    // Dashboard Page Locators
    // ======================
    this.quickStartText = page.getByText("Quick Start Guide");
    this.letStartButton = page.getByRole("button", { name: "Let's Start!" });
    this.dashboardLink = page.getByRole("link", { name: "Dashboard" });
    this.dateSelector = page.getByPlaceholder("Start date");
    this.dashboardDropdown = page.locator(".ant-select-selector");

    // Dropdown options
    this.allAccountsOption = page.getByText("All Accounts").nth(1);
    this.defaultOption = page.getByText("Default").first();

    // Graphs
    this.maxDailyActiveSeats = page.getByText("Max Daily Actives");
    this.minDailyInactiveSeats = page.getByText("Min Daily Inactives");
    this.graphModal = page.locator(".obdi6ffL.yBdan0WZ");
    this.graphNames = page.getByText("Daily Seats");
  }

  // ======================
  // Dashboard Methods
  // ======================

  async openDashboard() {
    await expect(this.quickStartText).toBeVisible();
    await this.letStartButton.click();
    await expect(this.dashboardLink).toBeVisible();
    await expect(this.dateSelector).toBeVisible();
  }

  async selectDropdownAllAccounts() {
    await expect(this.dashboardDropdown).toBeVisible();
    await this.dashboardDropdown.click();
    await expect(this.allAccountsOption).toBeVisible();
    await this.allAccountsOption.click();
  }

  async selectDropdownDefault() {
    await this.dashboardDropdown.click();
    await expect(this.defaultOption).toBeVisible();
    await this.defaultOption.click();
  }

  async validateGraphs() {
    await expect(this.graphModal).toBeVisible();
    await expect(this.graphNames).toBeVisible();
    await expect(this.maxDailyActiveSeats).toBeVisible();
    await expect(this.minDailyInactiveSeats).toBeVisible();
  }
}
