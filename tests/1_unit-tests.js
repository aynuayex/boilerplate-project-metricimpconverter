const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Input Number checks', function () {
        // #1
        test('should correctly read a whole number input.', function () {
            assert.equal(parseFloat(convertHandler.getNum("5mi")), 5)
        })
    
        // #2
        test('should correctly read a decimal number input.', function () {
            assert.equal(parseFloat(convertHandler.getNum("5.7km")), 5.7)
        })
    
        // #3
        test('should correctly read a fractional input.', function () {
            assert.equal(parseFloat(convertHandler.getNum("1/2lbs")), 0.5)
        })
    
        // #4
        test('should correctly read a fractional input with a decimal.', function () {
            assert.equal(parseFloat(convertHandler.getNum("2.1/5gal")), 0.42)
        })
    
        // #5
        test('should correctly return an error on a double-fraction (i.e. 3/2/3).', function () {
            assert.isNaN(convertHandler.getNum("3/2/3"))
        })
    
        // #6
        test('should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
            assert.equal(parseFloat(convertHandler.getNum("mi")), 1)
        })
    })


    suite('Input Unit checks', function () {
        // #7
        test('should correctly read each valid input unit.', function () {
            assert.equal(convertHandler.getUnit("kg"), 'kg')
        })
    
        // #8
        test('should correctly return an error for an invalid input unit.', function () {
            assert.isUndefined(convertHandler.getReturnUnit("kml"))
        })
    
        // #9
        test('should return the correct return unit for each valid input unit.', function () {
            assert.equal(convertHandler.getReturnUnit("lbs"), 'kg')
        })
    
        // #10
        test('should correctly return the spelled-out string unit for each valid input unit.', function () {
            assert.equal(convertHandler.spellOutUnit("gal"), "gallons")
        })
    })

    suite('Unit conversion checks', function () {
        // #11
        test('should correctly convert gal to L.', function () {
            assert.equal(convertHandler.getReturnUnit("gal"), "L")
        })
    
        // #12
        test('should correctly convert L to gal.', function () {
            assert.equal(convertHandler.getReturnUnit("L"), "gal")
        })
    
        // #13
        test('should correctly convert mi to km.', function () {
            assert.equal(convertHandler.getReturnUnit("mi"), "km")
        })
    
        // #14
        test('should correctly convert km to mi.', function () {
            assert.equal(convertHandler.getReturnUnit("km"), "mi")
        })
    
        // #15
        test('should correctly convert lbs to kg.', function () {
            assert.equal(convertHandler.getReturnUnit("lbs"), "kg")
        })
    
        // #16
        test('should correctly convert kg to lbs.', function () {
            assert.equal(convertHandler.getReturnUnit("kg"), "lbs")
        })
    })

});