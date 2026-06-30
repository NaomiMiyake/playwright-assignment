import { test } from '../fixtures/fixtures';
import testData from '../test-data/testData.json';
import { ExpectedResult } from '../types/TestResult';

type TestData = {
  testId: string;
  title: string;
  username: string;
  password: string;
  expected: ExpectedResult;
};

const dataList = testData as TestData[];
for (const data of dataList) {
  test(`${data.testId} - ${data.title}`, async ({ loginPage, secureAreaPage }) => {
    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    const expected = data.expected.trim().toLowerCase();
    switch (expected) {
      case ExpectedResult.SUCCESS:
        await secureAreaPage.expectLoaded();
        break;

      case ExpectedResult.FAILURE:
        await loginPage.expectFailure();
        break;

      default:
        throw new Error(
          `Invalid expected value "${data.expected}" ` +
            `for ${data.testId} (${data.title}). ` +
            `Expected "success" or "failure".`,
        );
    }
  });
}
