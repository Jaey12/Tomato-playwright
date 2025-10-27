const { test, expect } = require('@playwright/test');

test.only('Tomato WebApp Smoke test script', async ({ page }) => {

  // ======================
  // Test Data
  // ======================
  const SignupandLoginEmailID = "jayasurya+170test@tomato.ai";
  const NewPW = "Jayasurya123!";
  const cardNumberData = "4242424242424242";
  const cardHolderNameData = "Jay S";
  const CVVNumberData = "123";
  const ExpiryDateData = "12/34";

  // ======================
  // Navigate to Application
  // ======================
  await page.goto("https://stgapp.tomato.ai/login");

  // ======================
  // Signup Page Locators
  // ======================
  /*const signupButton = page.locator("a[title='Register']");
  const Companyname = page.locator("input[placeholder='Company']");
  const FirstName = page.locator("input[placeholder='First Name']");
  const LastName = page.locator("input[placeholder='Last Name']");
  const EmailID = page.locator("input[placeholder='john.smith@company.com']");
  const Signupcheckbox = page.locator("#terms");
  const Signupterms = page.locator("label[for='terms']");
  const signupsubmit = page.locator("button[type='submit']");
  const SignupCongrajulationMessage = page.locator(".O9zr00Fk");
  const LoginButtoninSuccessPage = page.getByText('Go to Log In');

  // ======================
  // Login Page Locators
  // ======================
  const WorkEmail = page.locator("input[name$='email']");
  const PasswordEyeicon = page.locator("path[fill='#121E23']");
  const LoginButton = page.locator("button[type='submit']");

  // ======================
  // Create Password Page Locators
  // ======================
  const CreatePasswordPage = page.getByText("Create Password");
  const newPassword = page.locator("#newPassword");
  const confirmNewPassword = page.locator("#confirmNewPassword");
  const SetPasswordButton = page.getByRole('button', { name: "Set Password" });
  const passwordCreationSuccess = page.getByText("Success!");
  const LoginbuttonPasswordcreationPage = page.getByRole('link', { name: "Log In" });*/

  // ======================
  // Login Final Page Locators
  // ======================
  const LoginWorkmail = page.locator("input[placeholder='john.smith@company.com']");
  const LoginPassword = page.getByTestId("login-password-input");
  const LoginButtonFinal = page.getByRole('button', { name: "Log In" });

  // ======================
  // Payment Page Locators
  // ======================
  /*const cardNumberFrame = page.frameLocator('iframe[title="Secure card number input frame"]');
  const expDateFrame = page.frameLocator('iframe[title="Secure expiration date input frame"]');
  const cvcFrame = page.frameLocator('iframe[title="Secure CVC input frame"]');
  const cardHolderName = page.locator("#cardHolderName");
  const Zip = page.locator("#zip");
  const CountrySelection = page.getByRole('combobox', { name: "combobox" });
  const BuyNowButton = page.getByRole('button', { name: "Buy Now" });

  // ======================
  // Dashboard Page Locators
  // ======================
  const QuickStartText = page.getByText("Quick Start Guide");
  const LetstartButton = page.getByRole("button", { name: "Let's Start!" });
  const Dashboard = page.getByRole('link',{name:'Dashboard'});
  const DashboardDateselector = page.getByPlaceholder("Start date");
  const DashboardDropdown = page.locator('.ant-select-selector');
  const DashboardMaxDailyActiveSeats = page.getByText("Max Daily Actives");
  const DashboardMinDailyInActiveSeats = page.getByText("Min Daily Inactives");
  const DashboardGraphModal = page.locator(".obdi6ffL.yBdan0WZ");
  const DashboardGraphnames = page.getByText("Daily Seats");

  // ======================
  // Signup Flow
  // ======================
  await signupButton.click();
  await Companyname.fill("QAoncloud");
  await FirstName.fill("Jay");
  await LastName.fill("Surya");
  await EmailID.fill(SignupandLoginEmailID);
  await Signupcheckbox.click();
  await expect(Signupterms).toBeVisible();
  await expect(signupsubmit).toBeEnabled();
  await signupsubmit.click();

  // Congratulation Page
  await expect(SignupCongrajulationMessage).toBeVisible();
  await LoginButtoninSuccessPage.click();

  // ======================
  // Login Flow (OTP Page)
  // ======================
  await WorkEmail.fill(SignupandLoginEmailID);
  await page.pause(); // manual OTP entry
  await PasswordEyeicon.click();
  await expect(LoginButton).toBeEnabled();
  await LoginButton.click();

  // ======================
  // Create Password Flow
  // ======================
  await expect(CreatePasswordPage).toBeVisible();
  await newPassword.fill(NewPW);
  await confirmNewPassword.fill(NewPW);
  await expect(SetPasswordButton).toBeEnabled();
  await SetPasswordButton.click();
  await expect(passwordCreationSuccess).toBeVisible();
  await LoginbuttonPasswordcreationPage.click();*/

  // ======================
  // Final Login Flow
  // ======================
  await LoginWorkmail.fill(SignupandLoginEmailID);
  await LoginPassword.fill(NewPW);
  await expect(LoginButtonFinal).toBeEnabled();
  await LoginButtonFinal.click();

  // ======================
  // Payment Flow
  // ======================
  /*await cardNumberFrame.locator('input[name="cardnumber"]').fill(cardNumberData);
  await expDateFrame.locator('input[name="exp-date"]').fill(ExpiryDateData);
  await cvcFrame.locator('input[name="cvc"]').fill(CVVNumberData);
  await cardHolderName.fill(cardHolderNameData);
  await Zip.fill("1543");
  await BuyNowButton.click();

  // ======================
  // Dashboard Flow
  // ======================
  await expect(QuickStartText).toBeVisible();
  await LetstartButton.click();
  await expect(Dashboard).toBeVisible();
  await expect(DashboardDateselector).toBeVisible();

  // Dropdown Interactions
  await expect(DashboardDropdown).toBeVisible();
  await DashboardDropdown.click();
  await expect(page.getByText("All Accounts")).toBeVisible();
  await page.getByText("All Accounts").click();
  await DashboardDropdown.click();
  await expect(page.getByText("Default")).toBeVisible();
  await page.getByText("Default").click();

  // Graph Validations
  await expect(DashboardGraphModal).toBeVisible();
  await expect(DashboardGraphnames).toBeVisible();
  await expect(DashboardMaxDailyActiveSeats).toBeVisible();
  await expect(DashboardMinDailyInActiveSeats).toBeVisible();


  // ======================
  // License Flow
  // ======================
  const LicenseTab = page.locator("a[class='license-tab-step-1'] span");
  const LicenseHeading = page.locator("div[class='VA7eHce_'] h1");
  const LicenseName = page.getByText("Name"); 
  const LicenseKey = page.getByText("License Key");
  const BillingPeriod = page.getByText("Billing Period");
  const RenewalDate = page.getByText("Auto-Renewal Date");
  const LicenseSeats = page.locator('#licenses-modal').getByText('Seats', { exact: true });
  const LicenseCostPerSeat = page.getByText("Cost Per Seat");
  const LicenseseatCount = page.locator("div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)");
  const LicenseInstalls = page.locator("div[class='ant-col ezku6qKi css-19lec04'] div:nth-child(2) span:nth-child(1)");
  const LicenseTotalcost = page.locator("span:has-text('Total Cost')");
  const LicenseAutopaytoogle = page.locator(".ant-switch-handle");
  const LicenseAutopayClose = page.locator("button[class='Xkz1j0df U8VkvNQW mjX0nMbQ']");
  const LicenseAutopayconfirm = page.locator("button[class='Xkz1j0df c8HpHkJn mjX0nMbQ']");

  // Click tab
await LicenseTab.click();

// Define locators in an array
const licenseElements = [LicenseHeading, LicenseName, LicenseKey, BillingPeriod, RenewalDate, LicenseSeats, LicenseseatCount, LicenseInstalls,
  LicenseTotalcost,
  LicenseCostPerSeat
];

// Loop through each locator
for (const element of licenseElements) {
  await expect(element).toBeVisible();
  const text = await element.textContent();
  console.log(`✅ Element visible: ${text?.trim()}`);
}

await LicenseAutopaytoogle.click();
await LicenseAutopayClose.click();
await LicenseAutopaytoogle.click();
await LicenseAutopayconfirm.click();
console.log("Auto pay is off");
await LicenseAutopaytoogle.click();
await LicenseAutopayconfirm.click();
console.log("Auto pay is on");*/

// ======================
// Seats Page
// ======================
const SeatsButton = page.locator("a[href='/seats']");
await SeatsButton.click();


//Seats table
const teamHeader = page.locator("//th[normalize-space()='Team']");
const licenseHeader = page.locator("//th[normalize-space()='License']");
const seatNameHeader = page.locator("//div[normalize-space()='Seat Name']");
const lastActivityHeader = page.locator("//div[normalize-space()='Last Activity']");
const installedHeader = page.locator("//th[normalize-space()='Installed']");
const activeStatusHeader = page.locator("//th[normalize-space()='Active Status']");
const actionsHeader = page.locator("//div[normalize-space()='Actions']");


// ======================
// Seats table Validate Headers
// ======================
const SeatsTableElements = [teamHeader, licenseHeader, seatNameHeader, lastActivityHeader, installedHeader,activeStatusHeader, actionsHeader];

// Loop through each locator
for (const seatselement of SeatsTableElements) {
  await expect(seatselement).toBeVisible();
  const text = await seatselement.textContent();
  console.log(`✅ Element visible: ${text?.trim()}`);
}
await expect(teamHeader).toBeVisible();
await expect(licenseHeader).toBeVisible();
await expect(seatNameHeader).toBeVisible();
await expect(lastActivityHeader).toBeVisible();
await expect(installedHeader).toBeVisible();
await expect(activeStatusHeader).toBeVisible();
await expect(actionsHeader).toBeVisible();
console.log("✅ All table headers are visible");

await expect(page.getByText("All Accounts")).toBeVisible();
await page.getByText("All Accounts").click();

//Dropdown locators
const SeatsfirstDropdown = page.locator("//div[@id='agentAccounts']//div[@class='ant-select-selector']");
const SeatfirstDropdownoption = page.locator("//div[contains(text(),'Default')]");
const Seats2ndDropdown = page.locator("//div[@id='license']//div[contains(@class,'ant-select-selector')]");
const Seats2ndDropdownoption = page.locator("//div[contains(text(),'License 1')]");
const Seats3rdDropdown = page.locator("//div[@id='status']//div[contains(@class,'ant-select-selector')]");
const Seats3rdDropdownoption = page.locator("//div[contains(text(),'Active')]");
const Seats3rdDropdownoption2 = page.locator("//div[contains(text(),'Inactive')]")
const Searchplaceholder = page.getByPlaceholder('Search Seat');

//Seats Dropdown test
/*await SeatsfirstDropdown.click();
await SeatfirstDropdownoption.toBeVisible();
await SeatfirstDropdownoption.click();
console.log("✅ Default option selected");
await Seats2ndDropdown.click();
await Seats2ndDropdownoption.toBeVisible();
await Seats2ndDropdownoption.click();
console.log("✅ License 1 option selected");
await Seats3rdDropdown.click();
await Seats3rdDropdownoption.toBeVisible();
await Seats3rdDropdownoption.click();
console.log("✅ Active option selected");*/

//Search field test
await Searchplaceholder.fill("License");
await Searchplaceholder.clear();

//=================
//Managers Screen
//================

const managertab = page.locator("//span[normalize-space()='Managers']");
const managerheading = page.locator("//h1[normalize-space()='Managers']")
const TableCoulmnheaders = page.locator('thead.MCpDNXnq th');

await managertab.click();
await expect(managerheading).toBeVisible();

// Expected column names
  const expectedColumns = [
    'First Name',
    'Last Name',
    'Email',
    'Role',
    'Invoices',
    'Status',
    'Actions'
  ];

  // Get all header texts
  const headerTexts = await TableCoulmnheaders.allInnerTexts();

  // Trim whitespace and assert
  const trimmedHeaderTexts = headerTexts.map(h => h.trim());
  expect(trimmedHeaderTexts).toEqual(expectedColumns);
  console.log("✅ All Manager screen table headers are visible");

  //===============================
  //Manager table body validation
  const firstRow = page.locator('tbody.thfbO7W2 tr').first();

  // Assert all columns are visible for that row
  await expect(firstRow.locator('td:nth-child(1)')).toBeVisible(); // First Name
  await expect(firstRow.locator('td:nth-child(2)')).toBeVisible(); // Last Name
  await expect(firstRow.locator('td:nth-child(3)')).toBeVisible(); // Email
  await expect(firstRow.locator('td:nth-child(4)')).toBeVisible(); // Role
  await expect(firstRow.locator('td:nth-child(5)')).toBeVisible(); // Invoices
  await expect(firstRow.locator('td:nth-child(6)')).toBeVisible(); // Status
  await expect(firstRow.locator('td:nth-child(7)')).toBeVisible(); // Actions

  // Assert email matches
  const emailText = (await firstRow.locator('td:nth-child(3) span.vUZFIoF4').innerText()).trim();
  expect(emailText).toBe(SignupandLoginEmailID);

  //===========================
  //Add manager functionality
  //============================
  const Addbutton = page.locator("//button[normalize-space()='Add']")
  const modalValidation = page.locator("//h2[normalize-space()='Invite Managers']")
  const modalEmailField = page.locator("(//input[@class='_xRr_YK8'])[1]")
  const modalRoleSelection = page.locator("//label[normalize-space()='Role']")
  const modalInvoiceSelection = page.locator("//label[normalize-space()='Invoices']")
  const modalAddPerson = page.locator("//button[normalize-space()='+ Add Person']")
  const managerscreenEditButton = page.locator("//div[@id='users-card']//button[@type='button'][normalize-space()='Edit']")
  const managerscreenPages = page.locator("div[aria-label='Page Size'] div[class='ant-select-selector']")
  const managerscreenpagination = page.locator("//li[@class='ant-pagination-simple-pager']")

  await Addbutton.click();
  await expect(modalValidation).toBeVisible();
  console.log("Invite Managers Modal is Visible")
  await modalEmailField.fill("jayasurya+171test@Tomato.ai");
  await expect(modalRoleSelection).toBeVisible();
  await expect(modalInvoiceSelection).toBeVisible();
  await expect(modalAddPerson).toBeVisible();
  console.log("Role Selection, Invoices and Add person buttons are visible");
  await expect(managerscreenEditButton).toBeVisible();
  await expect(managerscreenPages).toBeVisible();
  await expect(managerscreenpagination).toBeVisible();


//=================
//Agent Screen
//=================

const AgentScreen = page.locator("//h1[normalize-space()='Agents']")
const AGENT_ACCOUNTS_DROPDOWN = '#agentAccounts .ant-select-selector';
const AGENT_STATUS_DROPDOWN = '#agentsStatus .ant-select-selector';
const AGENT_ACCENT_DROPDOWN = '#agentsAccent .ant-select-selector';

await expect(AgentScreen).toBeVisible();

const agentAccounts = page.locator(AGENT_ACCOUNTS_DROPDOWN);
await expect(agentAccounts).toBeVisible();
await agentAccounts.click();

// ---------- Agent Status Dropdown ----------
const agentStatus = page.locator(AGENT_STATUS_DROPDOWN);
await expect(agentStatus).toBeVisible();
await agentStatus.click();

// ---------- Agent Accent Dropdown ----------
const agentAccent = page.locator(AGENT_ACCENT_DROPDOWN);
await expect(agentAccent).toBeVisible();
await agentAccent.click();

console.log('✅ All dropdowns are visible and clickable');


//Mic Check Invite
const MicCheckInvite = page.locator("//button[normalize-space()='Mic Check Invite']")
await MicCheckInvite.click();
const INVITE_EMAIL = 'jayasurya@qaoncloud.com';   // email used to send invite

// ---------- Locators (consts) ----------
const MIC_CHECK_INVITE_BTN = 'button:has-text("Mic Check Invite")';
const INVITE_MODAL = '.ant-modal-content'; // adjust if your modal has a different selector
const TEAM_DROPDOWN_IN_MODAL = `${INVITE_MODAL} .ant-select-selector`; // team dropdown inside modal
const TEAM_OPTION_DEFAULT = `.ant-select-item-option[title="Default"]`; // option to choose
const EMAIL_INPUT_IN_MODAL = `${INVITE_MODAL} input[placeholder*="Email"], ${INVITE_MODAL} input[type="email"]`;
const SEND_INVITE_BTN = `${INVITE_MODAL} button:has-text("Send Invite")`;

// Users table + first row cells
const USERS_TABLE_ROWS = '#users-card table tbody tr';
const FIRST_ROW = `${USERS_TABLE_ROWS}:nth-child(1)`; // CSS nth-child is 1-based
const FIRST_ROW_TEAM_CELL = `${FIRST_ROW} td:nth-child(1)`;
const FIRST_ROW_NAME_CELL = `${FIRST_ROW} td:nth-child(2)`;
const FIRST_ROW_EMAIL_CELL = `${FIRST_ROW} td:nth-child(3)`;
const FIRST_ROW_STATUS_CELL = `${FIRST_ROW} td:nth-child(5)`; // status is 5th column
const FIRST_ROW_ACTION_CELL = `${FIRST_ROW} td:nth-child(6)`; // action column (Re-Invite button)

// 2) Click Mic Check Invite button
const micCheckBtn = page.locator(MIC_CHECK_INVITE_BTN);
await expect(micCheckBtn).toBeVisible();
await micCheckBtn.click();

// 3) Wait for invite modal to appear
const modal = page.locator(INVITE_MODAL);
await expect(modal).toBeVisible();

// 4) Select "Default" from Team dropdown inside modal
const teamDropdown = modal.locator(TEAM_DROPDOWN_IN_MODAL).first();
await expect(teamDropdown).toBeVisible();
await teamDropdown.click();

// Wait for and click the "Default" option (it may render outside the modal container)
const defaultOption = page.locator(TEAM_OPTION_DEFAULT);
await expect(defaultOption).toBeVisible();
await defaultOption.click();

// 5) Enter the invite email
const emailInput = modal.locator(EMAIL_INPUT_IN_MODAL).first();
await expect(emailInput).toBeVisible();
await emailInput.fill(INVITE_EMAIL);

// 6) Click Send Invite
const sendBtn = modal.locator(SEND_INVITE_BTN);
await expect(sendBtn).toBeVisible();
await sendBtn.click();

// Wait for first row's email cell to contain our invite email
const firstRowEmail = page.locator(FIRST_ROW_EMAIL_CELL);
await expect(firstRowEmail).toHaveText(INVITE_EMAIL, { timeout: 10000 });

// 8) Validate other columns in the first row
const firstRowTeam = page.locator(FIRST_ROW_TEAM_CELL);
await expect(firstRowTeam).toHaveText('Default');

// Status should contain 'Pending'
const firstRowStatus = page.locator(FIRST_ROW_STATUS_CELL);
await expect(firstRowStatus).toContainText('Pending');

// Action cell should contain a "Re-Invite" button
const reInviteBtn = page.locator(`${FIRST_ROW_ACTION_CELL} button:has-text("Re-Invite")`);
await expect(reInviteBtn).toBeVisible();

// Optional: log success
console.log(`✅ Invite for ${INVITE_EMAIL} appears in the first row with status 'Pending'`);



});
