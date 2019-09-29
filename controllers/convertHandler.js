/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'].sort((a,b) => b.length-a.length);

  
  this.newString = function(input) {
    input = input.replace(/\s/g, '');
    var foundDigits = input.match(/[0-9]/g); 
    if (foundDigits === null) return {number: 'invalid number', unit:this.newString("0" + input).unit};
    var lastDigit = foundDigits[foundDigits.length-1][0]; // This breaks with no numbers
    var splitIndex = input.lastIndexOf(lastDigit) + 1;
    
    var numString = input.slice(0, splitIndex);
    var unitString = input.slice(splitIndex);
    var number;
    var units = "invalid unit";
    
    
    // numString must match regex
    if (/^[0-9]+$/.test(numString)) {
      number = Number(numString)
    } else if (/[0-9]+([/]|\.)[0-9]+/.test(numString)) {
      if (Boolean(numString.match(/[/]/g)) && numString.match(/[/]/g).length>1) {
        number = "invalid number";
      } else number = Number(eval(numString));
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
    return this.newString(input).units;
  };
  
  // Done
  this.getReturnUnit = function(initUnit) {
    var result;
    
    if (initUnit === 'l') result = 'gal';
    if (initUnit === 'gal') result = 'l';
    if (initUnit === 'kg') result = 'lbs';
    if (initUnit === 'lbs') result = 'kg';
    if (initUnit === 'km') result = 'mi';
    if (initUnit === 'mi') result = 'kg';
    
    if (initUnit === 'L') result = 'GAL';
    if (initUnit === 'GAL') result = 'L';
    if (initUnit === 'KG') result = 'LBS';
    if (initUnit === 'LBS') result = 'KG';
    if (initUnit === 'KM') result = 'MI';
    if (initUnit === 'MI') result = 'KG';
    
    return result;
  };
  

  this.spellOutUnit = function(unit) {
    var result;
    unit = unit.toLowerCase();
    if (unit === 'l') result = 'liters'
    if (unit === 'gal') result = 'gallons';
    if (unit === 'kg') result = 'kilograms';
    if (unit === 'lbs') result = 'pounds';
    if (unit === 'km') result = 'kilometers';
    if (unit === 'mi') result = 'miles';
    
    return result;
  };
  
  
  this.getReturnUnit = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit === 'l') result = initNum / galToL;
    if (initUnit === 'gal') result = initNum * galToL;
    if (initUnit === 'kg') result = initNum / lbsToKg;
    if (initUnit === 'lbs') result = initNum * lbsToKg;
    if (initUnit === 'km') result = initNum / miToKm;
    if (initUnit === 'mi') result = initNum * miToKm;
    
    return result;
  };
  
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum==='invalid number' && initUnit==='invalid unit') return "invalid number and unit";
    if (initNum==='invalid number') return "invalid number";
    if (initUnit==='invalid unit') return 'invalid unit';
    
    result += String(initNum) + ' ';
    result += this.spellOutUnit(initUnit) + ' ';
    result += 'converts to ' + ' ';
    result += String(returnNum) + ' ';
    result += this.spellOutUnit(returnUnit) + '.';
    
    return result;
  };
  
}

module.exports = ConvertHandler;
