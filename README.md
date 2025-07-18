<div align="center">

# 📱 Mobile Test Automation - Android Calculator App

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-2.5.1-663399?style=for-the-badge&logo=appium&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

*Comprehensive mobile test automation framework demonstrating advanced Android testing capabilities*

[🚀 Getting Started](#-installation) • [📚 Documentation](#-project-structure) • [🧪 Test Scenarios](#-main-features) • [📄 License](#-license)

</div>

---

## 📋 Overview

This project demonstrates comprehensive **mobile test automation** expertise for Android applications using Appium and WebDriverIO. The framework follows the Page Object Model (POM) design pattern and includes extensive test scenarios for a calculator application, covering both positive and negative test cases with professional automation practices.

## 🎯 Objectives

- Demonstrate proficiency in mobile test automation using Appium and WebDriverIO
- Implement Page Object Model design pattern for maintainable test code
- Create comprehensive test scenarios covering positive and negative cases
- Establish cloud testing capabilities with BrowserStack integration
- Apply best practices for mobile test automation and reporting

## 🛠️ Technologies

- **[Appium 2.5.1](https://appium.io/)** - Mobile automation framework
- **[WebDriverIO 8.32.0](https://webdriver.io/)** - Test automation framework
- **[JavaScript (Node.js)](https://nodejs.org/)** - Programming language
- **[Mocha](https://mochajs.org/)** - Test framework
- **[Chai](https://www.chaijs.com/)** - Assertion library
- **[BrowserStack](https://www.browserstack.com/)** - Cloud testing platform
- **[Android Studio](https://developer.android.com/studio)** - Emulator and development tools

## 📁 Project Structure

```
mobile-test/
├── src/
│   ├── pages/
│   │   ├── BasePage.js          # Base class with common methods
│   │   └── CalculatorPage.js    # Calculator page object
│   ├── tests/
│   │   └── calculator.test.js   # Test scenarios
│   ├── utils/
│   │   └── helpers.js           # Test utilities
│   └── config/
│       └── capabilities.js     # Device capability configuration
├── apps/                        # APK files directory
├── screenshots/                 # Test screenshots
├── logs/                        # Appium logs
├── wdio.conf.js                # WebDriverIO configuration
├── package.json                # Dependencies and scripts
├── .env.example                # Environment variables template
└── README.md                   # Documentation
```

## 🚀 Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (version 14 or higher)
2. **Java Development Kit (JDK)** (version 8 or higher)
3. **Android Studio** with Android SDK
4. **Appium Server** (will be installed via npm)

### Android Setup

1. Install Android Studio
2. Configure Android SDK and environment variables:
   ```bash
   export ANDROID_HOME=/path/to/android-sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```
3. Create an Android Virtual Device (AVD) or connect a physical device
4. Download a calculator APK file and place it in the `apps/` directory

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anthonycdp/mobile-test.git
   cd mobile-test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create directories for apps and screenshots**:
   ```bash
   mkdir apps screenshots logs
   ```

4. **Copy your calculator APK file to the `apps/` directory**

5. **Copy environment template and configure**:
   ```bash
   cp .env.example .env
   ```

## 🧪 Usage

### Local Execution

1. Start your Android emulator or connect a physical device
2. Verify the device is connected:
   ```bash
   adb devices
   ```
3. Run tests locally:
   ```bash
   npm test
   # or
   npm run test:local
   ```

### BrowserStack Execution

1. Configure BrowserStack credentials in the `.env` file:
   ```env
   BROWSERSTACK_USERNAME=your_username
   BROWSERSTACK_ACCESS_KEY=your_access_key
   BROWSERSTACK_APP_URL=bs://your_app_id
   ```

2. Upload your APK to BrowserStack and get the app URL

3. Run tests on BrowserStack:
   ```bash
   npm run test:browserstack
   ```

## 🧪 Main Features

### Test Scenarios

The test suite includes the following comprehensive scenarios:

#### ✅ Positive Tests
- **App Launch**: Verify calculator app opens successfully
- **Basic Operations**: Test addition, subtraction, multiplication, division
- **Decimal Numbers**: Test calculations with decimal values
- **Large Numbers**: Test with large number inputs
- **Multiple Operations**: Test complex calculations
- **Clear Function**: Test calculator reset functionality

#### ❌ Negative Tests
- **Division by Zero**: Test error handling for invalid operations
- **Invalid Input Handling**: Test app behavior with edge cases

### Device Configurations

#### Local Configuration (wdio.conf.js)
```javascript
capabilities: [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Android Emulator',
    'appium:app': './apps/calculator.apk',
    'appium:automationName': 'UiAutomator2'
}]
```

#### BrowserStack Configuration
```javascript
capabilities: [{
    'bstack:options': {
        'userName': process.env.BROWSERSTACK_USERNAME,
        'accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
        'projectName': 'Mobile Test Automation',
        'buildName': 'Calculator App Tests'
    },
    'appium:platformName': 'Android',
    'appium:deviceName': 'Samsung Galaxy S21'
}]
```

## ✅ Validations

### Test Results Analysis

After running tests, you can find:
- **Console Output**: Real-time test execution results
- **Screenshots**: Captured on test failures (in `screenshots/` directory)
- **Logs**: Appium server logs (in `logs/` directory)

### Quality Metrics

- **Test Coverage**: All major calculator functions covered
- **Error Handling**: Comprehensive negative scenario testing
- **Cross-Device**: Local and cloud testing capabilities
- **Automation Best Practices**: Page Object Model implementation

## 📊 Statistics

### Project Metrics

| Metric | Value | Status |
|---------|-------|--------|
| **Test Scenarios** | 8+ | ✅ Complete |
| **Page Objects** | 2 | ✅ Complete |
| **Platforms Supported** | Android | ✅ Complete |
| **Cloud Integration** | BrowserStack | ✅ Complete |
| **Design Pattern** | Page Object Model | ✅ Complete |

### Test Distribution

- **Positive Test Cases**: 6 scenarios (75%)
- **Negative Test Cases**: 2 scenarios (25%)
- **UI Interaction Tests**: 100% coverage
- **Error Handling Tests**: Comprehensive validation

## 🎓 Best Practices

### Implemented Standards

- ✅ **Page Object Model**: Separation of test logic from page interactions
- ✅ **Reusable Components**: Base page class with common methods
- ✅ **Error Handling**: Comprehensive error handling and logging
- ✅ **Screenshot on Failure**: Automatic screenshot capture for debugging
- ✅ **Environment Configuration**: Separate configurations for local and cloud execution
- ✅ **Test Data Management**: Dynamic test data generation
- ✅ **Parallel Execution**: Support for running tests in parallel

### Mobile Testing Guidelines

1. **Android Emulator Setup**
   - Open Android Studio
   - Go to Tools > AVD Manager
   - Create a new virtual device (e.g., Pixel 4)
   - Select a system image (API level 29+)
   - Configure advanced settings if needed
   - Start the emulator and wait for complete initialization

2. **BrowserStack Integration**
   ```bash
   # Upload APK to BrowserStack
   curl -u "USERNAME:ACCESS_KEY" \
     -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
     -F "file=@/path/to/your/app.apk"
   ```

3. **Multi-Device Testing**
   ```javascript
   capabilities: [
       {
           'appium:deviceName': 'Samsung Galaxy S21',
           'appium:platformVersion': '11.0'
       },
       {
           'appium:deviceName': 'Google Pixel 4',
           'appium:platformVersion': '10.0'
       }
   ]
   ```

### Troubleshooting Common Issues

1. **Appium Server Not Starting**
   ```bash
   # Kill existing Appium processes
   pkill -f appium
   # Start Appium manually
   npx appium server
   ```

2. **Device Not Found**
   ```bash
   # Check connected devices
   adb devices
   # Restart ADB server
   adb kill-server && adb start-server
   ```

3. **App Installation Failure**
   - Verify APK file exists in `apps/` directory
   - Confirm APK compatibility with device/emulator
   - Ensure device has sufficient storage space

4. **Element Not Found**
   - Use Appium Inspector to verify element selectors
   - Check if app UI has changed
   - Adjust wait times in BasePage.js

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

<div align="center">

**Anthony Coelho**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anthonycdp)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anthonycoelhoqae/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anthonycoelho.dp@hotmail.com)

*QA Engineer specialized in performance testing and automation*

</div>

---

<div align="center">

### ⭐ If this project was helpful to you, consider giving it a star!

### 🤝 Contributions are welcome!

**Version**: 1.0.0

</div>