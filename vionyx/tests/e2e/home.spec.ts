import { expect, test } from "@playwright/test";

test("renders primary conversion journey and quick contact paths", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /start|view|work|project/i }).first()).toBeVisible();

  await page.getByRole("link", { name: /portfolio|work/i }).first().click();
  await expect(page.locator("#portfolio")).toBeInViewport();
  
  // Verify that portfolio titles are visible
  await expect(page.getByText("Luxury Hospitality Experience").first()).toBeVisible();
});

test("validates contact form and handles a successful submission", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, message: "Your message has been sent successfully!" }),
    });
  });

  await page.goto("/#contact");
  
  // Step 0: Click Let's Begin
  await page.getByRole("button", { name: /begin/i }).click();

  // Step 1: Select Service and Continue
  await page.getByRole("button", { name: "New Website" }).click();
  await page.getByRole("button", { name: /continue/i }).click();

  // Step 2: Select Budget and Continue
  await page.getByRole("button", { name: "$5k–10k" }).click();
  await page.getByRole("button", { name: /continue/i }).click();

  // Step 3: Select Timeline and Continue
  await page.getByRole("button", { name: "ASAP" }).click();
  await page.getByRole("button", { name: /continue/i }).click();

  // Step 4: Describe project and Continue
  await page.getByPlaceholder(/e\.g\./i).fill("We need a faster website with measurable lead conversion tracking.");
  await page.getByRole("button", { name: /continue/i }).click();

  // Step 5: Validation Check (submit without name)
  await page.getByRole("button", { name: /submit/i }).click();
  await expect(page.getByText("Name is required.")).toBeVisible();

  // Step 5: Fill fields and submit (using robust input locators to prevent strict mode violations)
  await page.locator('input[name="name"]').fill("Priya Shah");
  await page.locator('input[name="email"]').fill("priya@example.com");
  await page.locator('input[name="company"]').fill("Acme India");
  await page.locator('input[name="website"]').fill("https://acmeindia.com");
  await page.getByRole("button", { name: /submit/i }).click();

  // Step 6: Verify success screen
  await expect(page.getByText(/received your inquiry/i)).toBeVisible();
});
