import { test, expect } from "@playwright/test";
import { VehiclesPO } from "./pageObjects";
import fixture from "./fixture";

test('should navigate to the details page', async ({ page }) => {
  const vehiclesPO = new VehiclesPO()
  await page.goto(fixture.vehiclesListUrl)
  await page.locator(vehiclesPO.VEHICLE_ROW).first().click();
  await expect(page).toHaveURL(fixture.vehiclesDetailUrl)
})