/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  
  // Let's do all of our string parsing here     
//   this.newString = function(input) {
//     var newStr =  input.replace(/ /g, '');
//     var number;
//     var unit;
//     var unitStart;
    
//     // Opening with [0-9]+? (([/]|\.)[0-9]+)?
//     var startsWithNum = newStr.match(/[0-9]+/)
//     if (startsWithNum.index === 0) {
//       var length = startsWithNum[0].length;
//       // is next character a / or .?
//       if (startsWithNum[length].match(/([/]|\.)/)) {
        
//       } else {
//         unitStart = length;
//       }

      
//     } else {
//       number = "invalid number"
//     }
    
//     return {number, unit};
    
//   }
  
  
//   this.filterString = function(input) {
//     var completeNumber = input.match(/^[0-9]+/);
//     var compoundNumber = input.match(/^[0-9]+([/]|\.)[0-9]+/);
//     var number;
//     var unit;
//     var breakpoint;
    
//     if (compoundNumber) {
//       number = Number(eval(compoundNumber[0]));
//       breakpoint = compoundNumber[0].length;
//     } else if(completeNumber) {
//       number = Number(completeNumber[0]);
//       breakpoint = number.length;
//     } else {
//       number = "invalid number"
//     }
//     // var secondString = input.slice(breakpoint)[1];
    
//     var validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
//     validUnits.sort((a, b) => b.length - a.length);
    
//     // validUnits.indexOf(secondString)
//     for (let vu of validUnits) {
      
//       if (input.search(vu) >= 0) {
//         if (unit === undefined) {
//           unit = vu;
//           input.replace(vu, '');
//         } else {
//           unit = "invalid unit";
//         }
//       }
//     }
  
//     if (unit===undefined) {
//       unit = "invalid unit";
//     }
    
//     return {number, unit};
 
//   }
  
  
  
  this.newString = function(input) {
    var lastNum;
    var foundDigits = input.match(/[0-9]/g);
    var lastDigit = foundDigits[foundDigits.length-1][0];
    var splitIndex = input.lastIndexOf(lastDigit) + 1;
    
    var numString = input.slice(0, splitIndex);
    var unitString = input.slice(splitIndex);
    
    console.log(numString, unitString);
    
    
    
    
    
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
