const { test, expect } = require('@playwright/test');

test.only('Tomato playwright Script', async ({ page }) => {
  await page.goto("https://stgapp.tomato.ai/login");

  const WorkEmail = page.locator("input[name$='email']");
  const loginPassword = page.locator("input[name$='password']");
  const NoEmailError = page.locator("#error-message[data-testid$='login-email-input-error']");
  const NoPasswordError = page.locator("div[data-testid$='login-password-input-error']");
  const LoginButton = page.locator("button[type='submit']");

  // Error handling
  await WorkEmail.fill("jayasurya+126@tomato.ai");
  await loginPassword.fill("Jayasurya123!");
  await WorkEmail.press('Control+A');
  await WorkEmail.press('Backspace');   // clear email
  await loginPassword.press('Control+A');
  await loginPassword.press('Backspace'); // clear password

  await expect(NoEmailError).toHaveText("Email is required");
  console.log( await NoEmailError);
  await expect(NoPasswordError).toHaveText("Password is required");
  console.log( await NoPasswordError);
  await expect(LoginButton).toBeDisabled();

  // Login
  await WorkEmail.fill("jayasurya+126@tomato.ai");
  await loginPassword.fill("Jayasurya123!");
  await expect(LoginButton).toBeEnabled();
  await LoginButton.click();

  //Quick start guide
  const QuickStartGuide = page.locator("div[class='qv2R1gWE'] h2")
  const LetsStart = page.getByRole('button', { name: "Let's Start!" }).click();
  await expect(QuickStartGuide).toHaveText("Quick Start Guide");
  await expect(LetsStart).toBeVisible();
  await LetsStart.click();
  await page.pause();

});
