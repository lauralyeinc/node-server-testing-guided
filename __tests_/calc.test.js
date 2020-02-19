// jest no need to add.

const calculator = require('../calculator');

let valA =2;
let valB = 2;

describe('addition', () => {
    test('add numbers', () => {
        let expectedResult = 4;
        let result = calculator.add(valA, valB);
    
        expect(result).toBe(expectedResult);
    })

    test('identity', () => {
        expect(calculator.add( 2 , 0 )).toBe( 2 );
    })

    test('subtract numbers', () => {
        let expectedResult = 0; 
        let result = calculator.subtract(valA, valB);
    
        expect(result).toBe(expectedResult); 
    })
})


describe('multiply', () => {
    test('multiply numbers', () => {
        let expectedResult = 4;
        let result = calculator.multiply(valA, valB);
    
        expect(result).toBe(expectedResult);
    })
    
    test('divide numbers', () => {
        let expectedResult = 1;
        let result = calculator.divide(valA, valB);
    
        expect(result).toBe(expectedResult);
    })
})