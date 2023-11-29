import {it, expect, describe} from 'vitest';

import {add} from './math';

it('it should summarize all number values in an array', () => {
    //Arrange
    const numbers = [1,2];
    const expectedResult = numbers.reduce((prevValue, currValue) => prevValue + currValue,0);

    //Act
    const result = add(numbers);

    //Assert
    expect(result).toBe(expectedResult);
});


describe("negative tests", () => {
    it('should throw an error if no value is passed into the function', () => {
        const resultFn = () => {
            add();
        };
        expect(resultFn).toThrow();
    })
    
    it('should throw an error if provided with multiple arguments instead of an array', () => {
        const num1 = 1;
        const num2 = 2;
    
        const resultFn = () => {
            add(num1, num2);
        };
    
        expect(resultFn).toThrow();
    });
})
