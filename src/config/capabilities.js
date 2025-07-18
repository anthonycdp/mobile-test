const path = require('path');

const localCapabilities = {
    platformName: 'Android',
    platformVersion: '11.0',
    deviceName: 'Android Emulator',
    app: path.join(process.cwd(), 'apps', 'calculator.apk'),
    automationName: 'UiAutomator2',
    autoGrantPermissions: true,
    noReset: false,
    fullReset: false,
    newCommandTimeout: 300,
    androidInstallTimeout: 90000
};

const browserStackCapabilities = {
    'bstack:options': {
        'userName': process.env.BROWSERSTACK_USERNAME,
        'accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
        'projectName': 'Mobile Test Automation',
        'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'Calculator App Tests',
        'sessionName': 'Android Calculator Tests',
        'debug': true,
        'networkLogs': true,
        'appiumLogs': true
    },
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Samsung Galaxy S21',
    'appium:app': process.env.BROWSERSTACK_APP_URL,
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true
};

const getCapabilities = () => {
    return process.env.BROWSERSTACK === 'true' ? browserStackCapabilities : localCapabilities;
};

module.exports = {
    localCapabilities,
    browserStackCapabilities,
    getCapabilities
};