# Playwright Automation Assessment

A Playwright automation project built with TypeScript, covering both UI automation and API testing using Page Object Model (POM) design for maintainability and readability.

---

## 📌 Project Overview

This project demonstrates:

* UI end-to-end automation using Playwright
* API testing using Playwright request context
* Page Object Model (POM) implementation
* Test assertions for validation
* GitHub Actions CI workflow integration

---

## 🛠 Tech Stack

* Playwright
* TypeScript
* Node.js
* Visual Studio Code

---

## 📂 Project Structure

```bash
MYASSESSMENT/
│── .github/workflows/
│   └── playwright.yml
│
├── Pages/
│   ├── CartPage/
│   │   ├── CartPage.ts
│   │   └── CartPage_Locator.ts
│   │
│   ├── Checkout_CompletePage/
│   │   ├── Checkout_CompletePage.ts
│   │   └── Checkout_CompletePage_Locator.ts
│   │
│   ├── Checkout_InformationPage/
│   │   ├── Checkout_InformationPage.ts
│   │   └── Checkout_InformationPage_Locator.ts
│   │
│   ├── Checkout_OverViewPage/
│   │   ├── Checkout_OverViewPage.ts
│   │   └── Checkout_OverViewPage_Locator.ts
│   │
│   ├── LoginPage/
│   │   ├── LoginPage.ts
│   │   └── LoginPage_Locator.ts
│   │
│   ├── ProductPage/
│   │   ├── ProductPage.ts
│   │   └── ProductPage_Locator.ts
│   │
│   └── pageManager.ts
│
│── tests/
│   ├── APITest.spec.ts
│   └── MainTest.spec.ts
│
│── .gitignore
│── package.json
│── package-lock.json
│── playwright.config.ts

```

---

## ✅ UI Test Coverage

UI automation includes:

* Login flow
* Product selection
* Cart validation
* Checkout process
* Order completion verification

Implemented using Page Object Model to separate page actions and assertions.

---

## ✅ API Test Coverage

API testing includes:

* GET request validation
* POST request creation
* PUT / PATCH update verification
* DELETE request execution

Tested against JSONPlaceholder mock API.

> Note: JSONPlaceholder simulates successful updates but does not persist server-side changes.

---


## ▶ Prerequisites

Clone the repository

Install dependencies:

```bash
npm install
npx install playwright
```

## ▶ Run Project
Run all tests:

```bash
npx playwright test
```

Run UI tests only:

```bash
npx playwright test tests/MainTest.spec.ts
```

Run API tests only:

```bash
npx playwright test tests/APITest.spec.ts
```

Run tests in headed mode (to see browser):

```bash
npx playwright test --headed
```

---

## 📊 Generate Report

```bash
npx playwright show-report
```

---

## 🚀 CI Integration

GitHub Actions workflow is included for automated test execution.

---

## ⚠️ Troubleshooting (Windows PowerShell Execution Policy)

If PowerShell blocks Playwright commands with:

```bash
npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system.
```

Run commands using Execution Policy Bypass:

```bash
powershell -ExecutionPolicy Bypass -Command "npx playwright test tests/MainTest.spec.ts"
```

For report generation:

```bash
powershell -ExecutionPolicy Bypass -Command "npx playwright show-report"
```

> This issue happens because PowerShell script execution is restricted by default on some Windows environments.

---

📌 Future Improvements
* JSON test data parameterization
* Advanced API validation scenarios
* Retry and reporting enhancement


---

## 👨‍💻 Author

Built as part of Playwright automation practice and portfolio development.
