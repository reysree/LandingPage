import { test, expect } from '@playwright/test';

const routes = ['/', '/projects', '/about', '/contact'];

for (const route of routes) {
  test(`Audit responsiveness for ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState('networkidle');

    // Check for horizontal overflow
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth > doc.clientWidth;
    });

    expect(overflow, `Horizontal overflow detected on ${route}`).toBe(false);

    // Capture screenshot for visual inspection
    await page.screenshot({ 
      path: `./tests/screenshots/${route.replace(/\//g, 'home')}-${test.info().project.name}.png`,
      fullPage: true 
    });
  });
}
