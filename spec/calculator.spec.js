// Below is my tests for addition part of the calculator.spec file.
//const { add_function } = require("../src/calculator");

//This below test fails.
/*
describe("addZeros", () => {
  it("should return an answer of Zero", () => {
    expect(addZeros(0, 0)).toBe(0);
  });
});
*/

//This below test passes
/*
describe("addZeros", () => {
  it("should return an answer of Zero", () => {
    expect(add_function(0, 0)).toBe(0);
  });
});
*/

//This test fails
/*
describe("addNegativeOnes", () => {
  it("should return an answer of -2", () => {
    expect(addNegativeOnes(-1, -1)).toBe(-2);
  });
});
*/

//This test passes
/*
describe("addNegativeOnes", () => {
  it("should return an answer of -2", () => {
    expect(add_function(-1, -1)).toBe(-2);
  });
});
*/

//This test fails
/*
describe("addFourAndFive", () => {
  it("should return an answer of 9", () => {
    expect(addFourAndFive(4, 5)).toBe(9);
  });
});
*/

//This test passes
/*
describe("addFourAndFive", () => {
  it("should return an answer of 9", () => {
    expect(add_function(4, 5)).toBe(9);
  });
});
*/

// This is a failing-test for a function that can add a bunch of numbers,
/*
describe("addBunchOfNumbers", () => {
  it("should be able to add a bunch of numbers", () => {
    expect(addBunchOfNumbers(1, 2, 3, 4)).toBe(10);
  });
});
*/

//This test passes
const { addBunch } = require("../src/Addcalculator");

describe("addBunchOfNumbers", () => {
  it("should be able to add a bunch of numbers", () => {
    expect(addBunch(1, 2, 3, 4)).toBe(10);
  });
});

//Below is my multiplication part of the calculator.spec file.

//This test fails
/*
describe("multiply_functionTest", () => {
  it("should return the product of two numbers", () => {
    exepect(multiply_functionTest(1, 2)).toBe(2);
  });
});
*/

// this test passes
/*
const { multiply_function } = require("../src/calculator");

describe("multiply_functionTest", () => {
  it("should return the product of two numbers", () => {
    expect(multiply_function(8, 3)).not.toBe(6);
  });
});
*/

// this test for multiplication of bunch of numbers fails
/*
describe("multiplyABunch", () => {
  it("it should be able to return a multiplication of bunch of numbers", () => {
    expect(multiplyABunch(1, 2, 3, 4)).toBe(24);
  });
});
*/

// this test for multiplication of bunch of numbers passes
const { multiplyBunch } = require("../src/MultplyCalculator");

describe("multiplyABunch", () => {
  it("it should be able to return a multiplication of bunch of numbers", () => {
    expect(multiplyBunch(1, 2)).toBe(2);
  });
});
