// agentPage.js
// Page Object Model for Agent screen

const { expect } = require('@playwright/test');

class AgentPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // === Page locators (const-style fields) ===
    this.AGENT_SCREEN = "//h1[normalize-space()='Agents']";

    this.AGENT_ACCOUNTS_DROPDOWN = '#agentAccounts .ant-select-selector';
    this.AGENT_STATUS_DROPDOWN = '#agentsStatus .ant-select-selector';
    this.AGENT_ACCENT_DROPDOWN = '#agentsAccent .ant-select-selector';

    // Mic Check Invite modal & controls
    this.MIC_CHECK_INVITE_BTN = 'button:has-text("Mic Check Invite")';
    this.INVITE_MODAL = '.ant-modal-content';
    this.TEAM_DROPDOWN_IN_MODAL = `${this.INVITE_MODAL} .ant-select-selector`;
    this.TEAM_OPTION_DEFAULT = `.ant-select-item-option[title="Default"]`;
    this.EMAIL_INPUT_IN_MODAL = `${this.INVITE_MODAL} input[placeholder*="Email"], ${this.INVITE_MODAL} input[type="email"]`;
    this.SEND_INVITE_BTN = `${this.INVITE_MODAL} button:has-text("Send Invite")`;

    // Users table + first row cells
    this.USERS_TABLE_ROWS = '#users-card table tbody tr';
    this.FIRST_ROW = `${this.USERS_TABLE_ROWS}:nth-child(1)`;
    this.FIRST_ROW_TEAM_CELL = `${this.FIRST_ROW} td:nth-child(1)`;
    this.FIRST_ROW_NAME_CELL = `${this.FIRST_ROW} td:nth-child(2)`;
    this.FIRST_ROW_EMAIL_CELL = `${this.FIRST_ROW} td:nth-child(3)`;
    this.FIRST_ROW_STATUS_CELL = `${this.FIRST_ROW} td:nth-child(5)`;
    this.FIRST_ROW_ACTION_CELL = `${this.FIRST_ROW} td:nth-child(6)`;
  }


  // verify that dropdowns are visible and clickable
  async verifyDropdownsClickable() {
    const accounts = this.page.locator(this.AGENT_ACCOUNTS_DROPDOWN);
    await expect(accounts).toBeVisible();
    await accounts.click();

    const status = this.page.locator(this.AGENT_STATUS_DROPDOWN);
    await expect(status).toBeVisible();
    await status.click();

    const accent = this.page.locator(this.AGENT_ACCENT_DROPDOWN);
    await expect(accent).toBeVisible();
    await accent.click();
  }

  // Open mic-check modal by clicking the main button
  async openMicCheckModal() {
    const btn = this.page.locator(this.MIC_CHECK_INVITE_BTN);
    await expect(btn).toBeVisible();
    await btn.click();

    const modal = this.page.locator(this.INVITE_MODAL);
    await expect(modal).toBeVisible();
    return modal;
  }

  // Select Default team in modal
  async selectDefaultTeam() {
    const modal = this.page.locator(this.INVITE_MODAL);
    const teamDropdown = modal.locator(this.TEAM_DROPDOWN_IN_MODAL).first();
    await expect(teamDropdown).toBeVisible();
    await teamDropdown.click();

    // Option might render in portal; use page locator
    const defaultOption = this.page.locator(this.TEAM_OPTION_DEFAULT);
    await expect(defaultOption).toBeVisible();
    await defaultOption.click();
  }

  // Fill email and send invite
  async sendInvite(email) {
    const modal = this.page.locator(this.INVITE_MODAL);
    const emailInput = modal.locator(this.EMAIL_INPUT_IN_MODAL).first();
    await expect(emailInput).toBeVisible();
    await emailInput.fill(email);

    const sendBtn = modal.locator(this.SEND_INVITE_BTN);
    await expect(sendBtn).toBeVisible();
    await sendBtn.click();
  }

  // Validate first row contains the invited email and expected values
  async validateFirstRowHasInvite(email, expectedTeam = 'Default') {
    const firstRowEmail = this.page.locator(this.FIRST_ROW_EMAIL_CELL);
    await expect(firstRowEmail).toHaveText(email, { timeout: 10000 });

    const firstRowTeam = this.page.locator(this.FIRST_ROW_TEAM_CELL);
    await expect(firstRowTeam).toHaveText(expectedTeam);

    const firstRowStatus = this.page.locator(this.FIRST_ROW_STATUS_CELL);
    await expect(firstRowStatus).toContainText('Pending');

    const reInviteBtn = this.page.locator(`${this.FIRST_ROW_ACTION_CELL} button:has-text("Re-Invite")`);
    await expect(reInviteBtn).toBeVisible();
  }
}

module.exports = { AgentPage };
