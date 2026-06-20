import { Page, expect } from '@playwright/test';

export class SecureAreaPage {
    constructor(private page: Page) {}

    async expectLoaded() {
        await expect(this.page).toHaveURL(/logged-in-successfully/);

        await expect(
            this.page.getByRole('heading', { name: 'Logged In Successfully' })
        ).toBeVisible();

        await expect(
            this.page.getByText('Congratulations student. You successfully logged in!')
        ).toBeVisible();

        await expect(
            this.page.getByRole('link', { name: 'Log out' })
        ).toBeVisible();
    }
}