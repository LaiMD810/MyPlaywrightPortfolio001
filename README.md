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

---

## 📂 Project Structure

```bash
MYASSEMENT/
│── .github/workflows/
│   └── playwright.yml
│
│── PageOfModels/
│   ├── CartPage.ts
│   ├── Checkout_CompletePage.ts
│   ├── Checkout_InformationPage.ts
│   ├── Checkout_OverviewPage.ts
│   ├── LoginPage.ts
│   ├── pageManager.ts
│   └── ProductPage.ts
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

## ▶ Run Project

Install dependencies:

```bash
npm install
```

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

---

## 📊 Generate Report

```bash
npx playwright show-report
```

---

## 🚀 CI Integration

GitHub Actions workflow is included for automated test execution.

---

📌 Future Improvements
JSON test data parameterization
Advanced API validation scenarios
Retry and reporting enhancement


---

## 👨‍💻 Author
Lai Mun Dee

Built as part of Playwright automation practice and portfolio development.
