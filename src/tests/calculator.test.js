const calculatorPage = require('../pages/CalculatorPage');
const { expect } = require('chai');

describe('Calculator App Tests', () => {
    beforeEach(async () => {
        await calculatorPage.clear();
    });

    it('should launch the calculator app successfully', async () => {
        const isDisplayed = await calculatorPage.isCalculatorDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should perform addition correctly', async () => {
        await calculatorPage.performAddition(5, 3);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('8');
    });

    it('should perform subtraction correctly', async () => {
        await calculatorPage.performSubtraction(10, 4);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('6');
    });

    it('should perform multiplication correctly', async () => {
        await calculatorPage.performMultiplication(7, 8);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('56');
    });

    it('should perform division correctly', async () => {
        await calculatorPage.performDivision(20, 4);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('5');
    });

    it('should handle decimal numbers', async () => {
        await calculatorPage.performAddition(2.5, 1.5);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('4');
    });

    it('should handle zero division (negative test)', async () => {
        await calculatorPage.performDivision(10, 0);
        const result = await calculatorPage.getResult();
        expect(result).to.contain('Error').or.contain('∞').or.contain('Cannot divide by zero');
    });

    it('should clear the calculator', async () => {
        await calculatorPage.enterNumber(123);
        await calculatorPage.clear();
        const result = await calculatorPage.getResult();
        expect(result).to.equal('0').or.equal('');
    });

    it('should perform multiple operations', async () => {
        await calculatorPage.enterNumber(5);
        await calculatorPage.click(calculatorPage.plusButton);
        await calculatorPage.enterNumber(3);
        await calculatorPage.click(calculatorPage.multiplyButton);
        await calculatorPage.enterNumber(2);
        await calculatorPage.click(calculatorPage.equalsButton);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('16').or.equal('11');
    });

    it('should handle large numbers', async () => {
        await calculatorPage.performAddition(999999, 1);
        const result = await calculatorPage.getResult();
        expect(result).to.equal('1000000').or.equal('1,000,000');
    });
});