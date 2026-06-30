export const ExpectedResult = {
  SUCCESS: 'success',
  FAILURE: 'failure',
} as const;

export type ExpectedResult = (typeof ExpectedResult)[keyof typeof ExpectedResult];
