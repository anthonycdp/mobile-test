const BasePage = require('./BasePage');

class CalculatorPage extends BasePage {
    get digit0() { return $('~0'); }
    get digit1() { return $('~1'); }
    get digit2() { return $('~2'); }
    get digit3() { return $('~3'); }
    get digit4() { return $('~4'); }
    get digit5() { return $('~5'); }
    get digit6() { return $('~6'); }
    get digit7() { return $('~7'); }
    get digit8() { return $('~8'); }
    get digit9() { return $('~9'); }

    get plusButton() { return $('~plus'); }
    get minusButton() { return $('~minus'); }
    get multiplyButton() { return $('~multiply'); }
    get divideButton() { return $('~divide'); }
    get equalsButton() { return $('~equals'); }
    get clearButton() { return $('~clear'); }
    get deleteButton() { return $('~delete'); }
    get decimalButton() { return $('~decimal'); }

    get resultDisplay() { return $('android.widget.TextView'); }
    get formulaDisplay() { return $('//android.widget.TextView[@index="0"]'); }

    async getDigitButton(digit) {
        const digitMap = {
            '0': this.digit0,
            '1': this.digit1,
            '2': this.digit2,
            '3': this.digit3,
            '4': this.digit4,
            '5': this.digit5,
            '6': this.digit6,
            '7': this.digit7,
            '8': this.digit8,
            '9': this.digit9
        };
        return digitMap[digit];
    }

    async enterNumber(number) {
        const digits = number.toString().split('');
        for (const digit of digits) {
            if (digit === '.') {
                await this.click(this.decimalButton);
            } else {
                const button = await this.getDigitButton(digit);
                await this.click(button);
            }
        }
    }

    async performAddition(num1, num2) {
        await this.enterNumber(num1);
        await this.click(this.plusButton);
        await this.enterNumber(num2);
        await this.click(this.equalsButton);
    }

    async performSubtraction(num1, num2) {
        await this.enterNumber(num1);
        await this.click(this.minusButton);
        await this.enterNumber(num2);
        await this.click(this.equalsButton);
    }

    async performMultiplication(num1, num2) {
        await this.enterNumber(num1);
        await this.click(this.multiplyButton);
        await this.enterNumber(num2);
        await this.click(this.equalsButton);
    }

    async performDivision(num1, num2) {
        await this.enterNumber(num1);
        await this.click(this.divideButton);
        await this.enterNumber(num2);
        await this.click(this.equalsButton);
    }

    async getResult() {
        return await this.getText(this.resultDisplay);
    }

    async clear() {
        await this.click(this.clearButton);
    }

    async isCalculatorDisplayed() {
        return await this.isDisplayed(this.resultDisplay);
    }
}

module.exports = new CalculatorPage();