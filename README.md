## Table of Contents

- [Japanese](#playwright自動化テスト課題)
- [English](#playwright-assignment)

# Playwright自動化テスト課題

## 概要

Playwright と TypeScript を用いた UI テスト自動化です。

---

## 主な特徴

- Page Object Model (POM) による画面操作とテストロジックの切り離し
- JSON を用いたデータドリブンテスト
- GitHub Actions による CI 実行
- GitHub Pages を利用した HTML レポートの公開

---

## テスト対象

https://practicetestautomation.com/practice-test-login/

---

## 手動テストケース

| Test ID | テスト観点   | 手順                                                             | 期待結果                                         |
| ------- | ------------ | ---------------------------------------------------------------- | ------------------------------------------------ |
| TC001   | 正常ログイン | 有効なユーザー名とパスワードを入力し、Submitをクリックする       | ログイン成功画面が表示される                     |
| TC002   | 認証エラー   | 有効なユーザー名と不正なパスワードを入力し、Submitをクリックする | エラーメッセージが表示される                     |
| TC003   | 入力チェック | ユーザー名を未入力、パスワードを入力し、Submitをクリックする     | バリデーションまたはエラーメッセージが表示される |

---

## ディレクトリ構成

```text
.
├── .github/
│   └── workflows/
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── types/
├── playwright.config.ts
└── README.md
```

---

## 実行方法

### 依存関係のインストール

```bash
npm ci
```

### Playwright ブラウザのインストール

```bash
npx playwright install --with-deps
```

### テスト実行

```bash
npm test
```

---

## CI / GitHub Actions

GitHub Actions により Push ごとに自動でテストを実行します。
Playwright HTML レポートは GitHub Pages からオンラインで確認できます。

**HTML Report:** https://naomimiyake.github.io/playwright-assignment/

---

## 設計方針

- Page Object Model による画面操作とテストロジックの切り離し（保守性の向上）
- JSON ファイルによるテストデータ管理とデータドリブンテスト
- LoginPage は操作対象の要素に対して locator() を使用
- SecureAreaPage はユーザー視点での検証を意識し、getByRole() / getByText() を使用
- GitHub Actions を利用した継続的なテスト実行
- GitHub Pages を利用したテストレポートへのアクセス性向上

---

## 補足

スクリーンショット、動画、トレースを取得し、テスト結果の確認やデバッグに利用します。

---

# Playwright Assignment

## Overview

UI test automation using Playwright and TypeScript.

---

## Key Features

- Using the Page Object Model (POM) to separate page operations and test logic
- Using JSON files for data-driven testing
- Running tests with GitHub Actions
- Publishing HTML reports via GitHub Pages

---

## Test Target

https://practicetestautomation.com/practice-test-login/

---

## Manual Test Cases

| Test ID | Test Point           | Steps                                                             | Expected Result                            |
| ------- | -------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| TC001   | Valid login          | Enter a valid username and password, then click Submit            | The login success page is displayed        |
| TC002   | Authentication error | Enter a valid username and an invalid password, then click Submit | An error message is displayed              |
| TC003   | Input validation     | Leave the username empty, enter a password, then click Submit     | A validation or error message is displayed |

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── types/
├── playwright.config.ts
└── README.md
```

---

## How to Run

### Install dependencies

```bash
npm ci
```

### Install Playwright browsers

```bash
npx playwright install --with-deps
```

### Run tests

```bash
npm test
```

---

## CI / GitHub Actions

Tests are automatically executed on every push using GitHub Actions.
The Playwright HTML report is published online through GitHub Pages.

**HTML Report:** https://naomimiyake.github.io/playwright-assignment/

---

## Design

- Using the Page Object Model (POM) to separate page operations and test logic for better maintainability
- Using JSON files to separate test data from test logic and enable data-driven testing
- LoginPage uses `locator()` for page interactions
- SecureAreaPage uses `getByRole()` and `getByText()` for user-facing verification
- Running tests with GitHub Actions
- Publishing test reports via GitHub Pages for easy access

---

## Notes

Screenshots, videos, and traces are used for test verification and debugging.
