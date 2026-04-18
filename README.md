# E-Commerce Playwright POM Framework

## Overview
This project is a test automation framework built using:

- TypeScript
- Playwright
- Page Object Model (POM)
- Git/GitHub

It automates end-to-end testing for e-commerce workflows such as:

- User login
- Product search
- Add to cart
- Checkout process
- Order validation

## Framework Design
This framework follows the Page Object Model (POM) design pattern for:

- Reusability
- Maintainability
- Separation of test logic and page locators

Project structure:

```bash
ecommerce-playwright-pom-framework/
│
├── tests/
├── pages/
├── utils/
├── fixtures/
├── playwright.config.ts
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-playwright-pom-framework.git
cd ecommerce-playwright-pom-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

## Generate Test Report

```bash
npx playwright show-report
```

## Features
- Cross-browser testing
- Page Object Model architecture
- Reusable locators and methods
- HTML reporting
- Scalable automation framework

## Example Test Coverage
Sample scenarios covered:

- Login validation
- Add item to cart
- Checkout flow
- Negative test scenarios
- UI validations

## Future Enhancements
- CI/CD integration using GitHub Actions
- API testing integration
- Data-driven testing
- Parallel execution
- Docker support

## Author
Koffi Assiehuie

