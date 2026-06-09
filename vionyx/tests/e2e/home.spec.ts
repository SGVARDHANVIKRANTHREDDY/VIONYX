import { expect, test } from "@playwright/test";

test("renders primary conversion journey and quick contact paths", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /book|consultation|get/i }).first()).toBeVisible();

  await page.getByRole("link", { name: /portfolio|work/i }).first().click();
  await expect(page.locator("#portfolio")).toBeInViewport();
  await expect(page.getByText("+42% direct reservations in 8 weeks")).toBeVisible();

  await page.getByRole("link", { name: /whatsapp/i }).first().scrollIntoViewIfNeeded();
  await expect(page.getByRole("link", { name: /whatsapp/i }).first()).toHaveAttribute("href", /wa\.me/);
  await expect(page.getByRole("link", { name: /callback/i }).first()).toHaveAttribute("href", /^tel:/);
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
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText("Name is required.")).toBeVisible();

  await page.getByLabel(/full name/i).fill("Priya Shah");
  await page.getByLabel(/email/i).fill("priya@example.com");
  await page.getByLabel(/phone/i).fill("+91 98765 43210");
  await page.getByLabel(/company/i).fill("Acme India");
  await page.getByLabel(/project description/i).fill("We need a faster website with measurable lead conversion tracking.");
  await page.getByRole("button", { name: /send message/i }).click();

  await expect(page.getByRole("status")).toContainText("sent successfully");
});
