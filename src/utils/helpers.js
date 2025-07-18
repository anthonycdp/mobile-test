class TestHelpers {
    static async takeScreenshot(name) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `${name}_${timestamp}.png`;
        await driver.saveScreenshot(`./screenshots/${filename}`);
        return filename;
    }

    static async waitForAppToLoad(timeout = 30000) {
        await driver.pause(3000);
        
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                const activity = await driver.getCurrentActivity();
                if (activity && !activity.includes('launcher')) {
                    return true;
                }
            } catch (error) {
                console.log('Waiting for app to load...');
            }
            await driver.pause(1000);
        }
        throw new Error('App failed to load within timeout');
    }

    static async restartApp() {
        await driver.terminateApp(driver.capabilities['appium:appPackage']);
        await driver.pause(2000);
        await driver.activateApp(driver.capabilities['appium:appPackage']);
        await this.waitForAppToLoad();
    }

    static async getDeviceInfo() {
        const platformName = await driver.getPlatformName();
        const platformVersion = await driver.getPlatformVersion();
        const deviceName = driver.capabilities['appium:deviceName'];
        
        return {
            platformName,
            platformVersion,
            deviceName
        };
    }

    static generateTestData() {
        return {
            randomNumber: Math.floor(Math.random() * 1000),
            randomFloat: (Math.random() * 100).toFixed(2),
            timestamp: new Date().toISOString()
        };
    }

    static async logTestInfo(testName, info) {
        const deviceInfo = await this.getDeviceInfo();
        console.log(`\n=== ${testName} ===`);
        console.log(`Device: ${deviceInfo.deviceName}`);
        console.log(`Platform: ${deviceInfo.platformName} ${deviceInfo.platformVersion}`);
        console.log(`Info: ${info}`);
        console.log('========================\n');
    }
}

module.exports = TestHelpers;