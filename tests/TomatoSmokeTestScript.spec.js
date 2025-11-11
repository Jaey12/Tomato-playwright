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
  const BuyNowButton = page.getByRole('button', { name: "Buy Now" });*/

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
  /*await signupButton.click();
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
  await BuyNowButton.click();*/

  // ======================
  // Dashboard Flow
  // ======================
  /*await expect(QuickStartText).toBeVisible();
  await LetstartButton.click();
  await expect(Dashboard).toBeVisible();
  await expect(DashboardDateselector).toBeVisible();*/

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
  const LicenseHeading = page.getByRole('heading');
  const LicenseName = page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)")
  const LicenseKey = page.locator("//body/div[@id='app']/div[@data-testid='banner-container']/div[@id='app-layout']/div[@class='uNoOvI6O']/div[@class='VEEWCXMD']/div[@id='licenses-modal']/div[@class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical']/div[2]/div[1]/div[1]/span[1]")
  const BillingPeriod = page.locator("//div[@class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical']//div[1]//div[3]//div[2]//div[1]//div[1]//span[1]")
  const RenewalDate = page.locator("//div[@class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical']//div[1]//div[3]//div[2]//div[1]//div[1]//span[1]")
  const LicenseSeats = page.locator("div[class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical'] div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)")
  const LicenseInstalls = page.locator("div[class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical'] div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)")
  const LicenseCostPerSeat = page.locator("div[class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical'] div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)")
  const LicenseTotalcost = page.locator("div[class='ant-flex css-19lec04 ant-flex-align-stretch ant-flex-vertical'] div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)")
  const LicenseAutopaytoogle = page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)")
  const LicenseAutopayClose = page.locator("button[class='Xkz1j0df U8VkvNQW mjX0nMbQ']");
  const LicenseAutopayconfirm = page.locator("button[class='Xkz1j0df c8HpHkJn mjX0nMbQ']");

  // Click tab
await LicenseTab.click();

// Define locators in an array
const licenseElements = [LicenseHeading, LicenseName, LicenseKey, BillingPeriod, RenewalDate, LicenseSeats, LicenseInstalls,
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
console.log("Auto pay is on");

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
const SeatsAllAccountDD = page.locator("span[title='All Accounts']")
const SeatfirstDropdownoption = page.locator("//div[contains(text(),'Default')]")
const SeatsLicenseDD = page.getByText('All Licenes')
const Seats2ndDropdownoption = page.getByText('License 1')
const SeatsstatusDropdown = page.getByText('All Statuses')
const Seats3rdDropdownoption = page.locator("//div[contains(text(),'Active')]");
const Searchplaceholder = page.getByPlaceholder('Search Seat');

/*//Seats Dropdown test
await SeatsAllAccountDD.click();
await expect(SeatfirstDropdownoption).toBeVisible();
await SeatfirstDropdownoption.click();
console.log("✅ Default option selected");
await SeatsLicenseDD.click();
await expect(Seats2ndDropdownoption).toBeVisible();
await Seats2ndDropdownoption.click();
console.log("✅ License 1 option selected");
await SeatsstatusDropdown.click();
await expect(Seats3rdDropdownoption).toBeVisible();
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


  //===========================
  //Add manager functionality
  //============================
  const Addbutton = page.locator("//button[normalize-space()='Add']")
  const modalValidation = page.locator("//h2[normalize-space()='Invite Managers']")
  const modalEmailField = page.locator("(//input[@class='_xRr_YK8'])[1]")
  const modalRoleSelection = page.locator("//label[normalize-space()='Role']")
  const modalInvoiceSelection = page.locator("//label[normalize-space()='Invoices']")
  const modalAddPerson = page.locator("//button[normalize-space()='+ Add Person']")
  const sendInvite = page.locator('button:has-text("Send Invites")')
  const managerscreenEditButton = page.locator("//div[@id='users-card']//button[@type='button'][normalize-space()='Edit']")
  const managerscreenPages = page.locator("div[aria-label='Page Size'] div[class='ant-select-selector']")
  const managerscreenpagination = page.locator("//li[@class='ant-pagination-simple-pager']")


  await Addbutton.click();
  await expect(modalValidation).toBeVisible();
  console.log("Invite Managers Modal is Visible")
  await modalEmailField.fill("jayasurya+172test@Tomato.ai");
  await expect(modalRoleSelection).toBeVisible();
  await expect(modalInvoiceSelection).toBeVisible();
  await expect(modalAddPerson).toBeVisible();
  console.log("Role Selection, Invoices and Add person buttons are visible");
  await sendInvite.click();
  await expect(managerscreenEditButton).toBeVisible();
  await expect(managerscreenPages).toBeVisible();
  await expect(managerscreenpagination).toBeVisible();


//=================
//Agent Screen
//=================

const AgentScreen = page.locator("//span[normalize-space()='Agents Mic Checks']")
const AgentAllteamDD = page.locator("//span[@title='All Teams']")
const AgentAllstageDD = page.locator("//span[@title='All Stages']")
const AgentAllaccentDD = page.locator("//span[@title='All Accents']")

await AgentScreen.click();
await expect(AgentAllteamDD).toBeVisible();
await AgentAllteamDD.click();
await expect(AgentAllstageDD).toBeVisible();
await AgentAllstageDD.click();
await expect(AgentAllaccentDD).toBeVisible();
await AgentAllaccentDD.click();

//Mic check invite
const MicCheckInvite = page.locator('button:has-text("Mic Check Invite")');
const MicCheckInviteHeading = page.locator("//h2[normalize-space()='Mic Check Invite']");
const MicCheckDefaultDD = page.locator("span[title='Default']");
const MicCheckEmailField = page.locator('[name="emails"]');
const MicCheckDirectLink = page.locator('div.zV1ghZvJ');
const MicCheckSendinvites = page.locator('button:has-text("Send Invites")');

await MicCheckInvite.click();
await expect(MicCheckInviteHeading).toBeVisible();
console.log("Mic Check Invite modal Visible");
await expect(MicCheckDefaultDD).toBeVisible();
await MicCheckDefaultDD.dblclick();
await MicCheckEmailField.fill("jayasuryatest1@gmail.com");
await expect(MicCheckDirectLink).toBeVisible();
await MicCheckSendinvites.click();
console.log("Mic Check has been sent")

//Agent Mic Check Table
const AgentTableColumn1 = page.locator('th:has-text("Team")');
const AgentTableColumn2 = page.locator('th:has-text("Name")');
const AgentTableColumn3 = page.locator('th:has-text("Email")');
const AgentTableColumn4 = page.locator('th:has-text("Original Accent")');
const AgentTableColumn5 = page.locator("//th[normalize-space()='Mic Check']");
const AgentTableColumn6 = page.locator('th:has-text("Action")');

const AgentTable = [AgentTableColumn1, AgentTableColumn2, AgentTableColumn3, AgentTableColumn4, AgentTableColumn5, AgentTableColumn6];

for (const tablecolumn of AgentTable) {
  await expect(tablecolumn).toBeVisible();
  const text = await tablecolumn.textContent();
  console.log(`✅ Element visible: ${text?.trim()}`);
}
//Re-Invite Modal
const ReinviteMicCheck = page.locator('button:has-text("Re-Invite")');
await expect(ReinviteMicCheck).toBeVisible();
await ReinviteMicCheck.click();
console.log("Clicked on Re-invite button");

//=============
//Teams Screen
//=============

const TeamsButton = page.locator("//span[normalize-space()='Teams']");
const TeamHeading = page.getByTestId('accounts-header-title');
const TeamColumn1 = page.locator('th:has-text("Team Name")');
const TeamColumn2 = page.locator('th:has-text("License Name")');
const TeamColumn3 = page.locator('th:has-text("License Key")');
const TeamColumn4 = page.locator('th:has-text("License Type")');
const TeamColumn5 = page.locator('th:has-text("Seats")');
const TeamColumn6 = page.locator('th:has-text("Installs")')
const TeamColumn7 = page.locator('th:has-text("Actions")')

await TeamsButton.click();
await TeamHeading.click();

const TeamsTable = [TeamColumn1, TeamColumn2, TeamColumn3, TeamColumn4, TeamColumn5, TeamColumn6, TeamColumn7];

for (const Teamtablecolumn of TeamsTable) {
  await expect(Teamtablecolumn).toBeVisible();
  const text = await Teamtablecolumn.textContent();
  console.log(`✅ Element visible: ${text?.trim()}`);
}

//Teams Add Button
const TeamsAddButton = page.locator('button:has-text("Add")');
const AddModalHeading = page.getByText('Add New Team');
const TeamName = page.getByTestId('account-modal-account-name');
const ManagerDD = page.locator("//div[@name='users']//div[@class='ant-select-selection-overflow']");
const ManagerDDOption = page.locator("//div[contains(text(),'All Managers')]");
const LicenseDD = page.locator("//body/div[@id='app']/div[contains(@data-testid,'banner-container')]/div[@id='app-layout']/div[contains(@class,'uNoOvI6O')]/div[contains(@class,'VEEWCXMD')]/main[contains(@class,'rsXq_ztg')]/div[@id='add-accounts-modal']/div[contains(@class,'ant-modal-root css-19lec04')]/div[contains(@class,'ant-modal-wrap ant-modal-centered')]/div[contains(@role,'dialog')]/div/div[contains(@class,'ant-modal-content FSofnDQi')]/div[contains(@class,'ant-modal-body QDWmiyjU')]/div/form/div[contains(@class,'LL70SQpf')]/div[@id='undefined-licenses-select-wrapper']/div[contains(@name,'licenses')]/div[contains(@class,'ant-select-selector')]/span[contains(@class,'ant-select-selection-wrap')]/div[1]")
const LicenseDDOption = page.locator("//div[contains(text(),'All Licenses')]");
const TeamAddConfirmButton = page.locator('button:has-text("Confirm")');

await TeamsAddButton.click();
await expect(AddModalHeading).toBeVisible();
await TeamName.fill("New Team");
await ManagerDD.click();
await ManagerDDOption.click();
await LicenseDD.click();
await LicenseDDOption.click();
await TeamAddConfirmButton.click();


});
