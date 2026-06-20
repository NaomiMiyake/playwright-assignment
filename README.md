The English version follows the Japanese version.


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
| Test ID | 説明 | 期待結果 |
|---------|-----|---------|
| TC001 | 正常ログイン | ログイン成功 |
| TC002 | パスワード不正 | エラーメッセージ表示 |
| TC003 | ユーザー名未入力 | バリデーションまたはエラーメッセージ表示 |

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
npx playwright test
```

---

## CI / GitHub Actions
GitHub Actions により Push ごとに自動でテストを実行します。
Playwright HTML レポートは GitHub Pages からオンラインで確認できます。

---

## 設計方針
- Page Object Model による画面操作とテストロジックの切り離し（保守性の向上）
- JSON ファイルによるテストデータ管理とデータドリブンテスト
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
| Test ID | Description | Expected Result |
|---------|-------------|----------------|
| TC001 | Valid login | Login succeeds |
| TC002 | Invalid password | Error message is displayed |
| TC003 | Empty username | Validation or error message is displayed |

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
npx playwright test
```

---

## CI / GitHub Actions
Tests are automatically executed on every push using GitHub Actions.
The Playwright HTML report is published online through GitHub Pages.

---

## Design
- Using the Page Object Model (POM) to separate page operations and test logic for better maintainability
- Using JSON files for test data management and data-driven testing
- Running tests with GitHub Actions
- Publishing test reports via GitHub Pages for easy access

---

## Notes
Screenshots, videos, and traces are used for test verification and debugging.