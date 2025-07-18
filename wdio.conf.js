const path = require('path');

exports.config = {
    runner: 'local',
    specs: [
        './src/tests/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Android Emulator',
        'appium:app': path.join(process.cwd(), 'apps', 'calculator.apk'),
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:newCommandTimeout': 300,
        'appium:androidInstallTimeout': 90000
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723,
                relaxedSecurity: true
            },
            logPath: './logs/'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    before: function (capabilities, specs) {
        global.expect = require('chai').expect;
    },
    
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            driver.takeScreenshot();
        }
    }
};

if (process.env.BROWSERSTACK === 'true') {
    exports.config.user = process.env.BROWSERSTACK_USERNAME;
    exports.config.key = process.env.BROWSERSTACK_ACCESS_KEY;
    exports.config.hostname = 'hub-cloud.browserstack.com';
    exports.config.services = [
        ['browserstack', {
            buildIdentifier: process.env.BROWSERSTACK_BUILD_NAME || `${new Date().getTime()}`,
            browserstackLocal: true
        }]
    ];
    exports.config.capabilities = [{
        'bstack:options': {
            'userName': process.env.BROWSERSTACK_USERNAME,
            'accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
            'projectName': 'Mobile Test Automation',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'Calculator App Tests',
            'sessionName': 'Android Calculator Tests',
            'debug': true,
            'networkLogs': true
        },
        'appium:platformName': 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Samsung Galaxy S21',
        'appium:app': process.env.BROWSERSTACK_APP_URL || 'bs://your-app-id-here',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true
    }];
}