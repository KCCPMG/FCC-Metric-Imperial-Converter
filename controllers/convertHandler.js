/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'].sort((a,b) => b.length-a.length);
  // this.
  
  this.newString = function(input) {
    input = input.replace(/\s/g, '');
    var foundDigits = input.match(/[0-9]/g);
    var lastDigit = foundDigits[foundDigits.length-1][0];
    var splitIndex = input.lastIndexOf(lastDigit) + 1;
    
    var numString = input.slice(0, splitIndex);
    var unitString = input.slice(splitIndex);
    var number;
    var units = "invalid unit";
    
    
    // numString must match regex
    if (/[0-9]+/.test(numString)) {
      number = Number(numString)
    } else if (/[0-9]+([/]|\.)[0-9]+/.test(numString)) {
      number = Number(eval(numString));
    } else {
      number = "invalid number";
    }
    
    // unitString must match an option
    for (let vu of this.validUnits) {
      if (unitString === vu) {
        units = vu;
        break;
      }
    }
    
    return {number, units}
    
  }
  
  
  
  // Done
  this.getNum = function(input) {
    return this.newString(input).number;
  };
  
  // Done
  this.getUnit = function(input) {
    return this.newString(input).number;
  };
  
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };
  

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
