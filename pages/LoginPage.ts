import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#submit').click();
  }

  async expectFailure() {
    await expect(this.page.locator('#error')).toBeVisible();
  }
}
