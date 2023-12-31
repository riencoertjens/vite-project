// @ts-check
import { test, expect } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("has title", async ({ page }) => {
  await page.goto("/");
  await argosScreenshot(page, "homepage");

  await expect(
    page.getByRole("heading", { name: "Vite + Svelte" })
  ).toBeVisible();
});
