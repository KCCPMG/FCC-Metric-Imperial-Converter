/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  
  // Let's do all of our string parsing here     
  this.newString = function(input) {
    var newStr =  input.replace(/ /g, '');
    var number;
    var unit;
    var unitStart;
    
    // Opening with [0-9]+? (([/]|\.)[0-9]+)?
    var startsWithNum = newStr.match(/[0-9]+/)
    if (startsWithNum.index === 0) {
      var length = startsWithNum[0].length;
      // is next character a / or .?
      if (startsWithNum[length].match(/([/]|\.)/)) {
        
      } else {
        unitStart = length;
      }

      
    } else {
      number = "invalid number"
    }
    
    return {number, unit};
    
  }
  
  
  this.filterString = function(input) {
    var completeNumber = input.match(/[0-9]+/);
    var compoundNumber = input.match(/[0-9]+([/]|\.)[0-9]+/);
    
    
    if (completeNumber.length === 1 || compoundNumber.length === 1) {
      //good number
    } else {
      //invalid number
    }
    
    
    
  }
  
  
  
  
  this.getNum = function(input) {
    var result;
    
    
    return this.newString(input).number;
  };
  
  this.getUnit = function(input) {
    var result;
    
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
