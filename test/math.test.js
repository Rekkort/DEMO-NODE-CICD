const expect = require('chai').expect;
// import math file
const math = require('../mathFileToTest');
describe('mathFileToTest.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', () => {
            const result = math.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.add(2, 2);
            expect(result).to.equal(4);
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', () => {
            const result = math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });

    describe('math.divide() Test', () => {
        it('should equal 5', () => {
            const result = math.divide(5, 1);
            expect(result).to.equal(5);
        });
        it('should throw warning message', () => {
            num1 = 0;
            num2 = 5;
            const result = math.divide(num1, num2);
            if(num1 === 0 || num2 === 0){
                return console.error("Can't divide by 0");
            }
            else{
                expect(result).to.finite();
            }
            
        });
    });
});