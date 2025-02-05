function ConvertHandler() {
  
  this.getNum = function(input) {
    const num = input.split(/[a-zA-Z]/);
    let result = num[0];

    if(result === "") return "1"
    if(result.includes('/')) {
      if(result.indexOf('/') !== result.lastIndexOf('/')) {
          return NaN
        }
      
        const [numerator, denominator ] = result.split('/')
        result = (numerator / denominator).toFixed(5)
      }
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.split(/[a-zA-Z]/);
    const startOfUnitIndex = result[0].length

    const unit = input.slice(startOfUnitIndex).toLowerCase()
    const initUnit = (unit === 'l') ? 'L' : unit

    return initUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      "gal": "L", "lbs": "kg", "mi": "km", 
      "l": "gal", "kg": "lbs", "km": "mi", 
    }
    let result = unitMap[initUnit.toLowerCase()];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    const spellOutUnitMap = {
      "gal": "gallons", "lbs": "pounds", "mi": "miles", 
      "l": "liters", "kg": "kilograms", "km": "kilometers", 
    }
    let result = spellOutUnitMap[unit.toLowerCase()];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    initUnit = initUnit.toLowerCase()

    if(initUnit === "mi" ) {
      result = (initNum * miToKm)
    }
    if(initUnit === "km" ) {
      result = (initNum / miToKm)
    }
    if(initUnit === "lbs" ) {
      result = (initNum * lbsToKg)
    }
    if(initUnit === "kg" ) {
      result = (initNum / lbsToKg)
    }
    if(initUnit === "gal" ) {
      result = (initNum * galToL)
    }
    if(initUnit === "l" ) {
      result = (initNum / galToL)
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const initUnitString = this.spellOutUnit(initUnit)
    const returnUnitString = this.spellOutUnit(returnUnit)

    let result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
