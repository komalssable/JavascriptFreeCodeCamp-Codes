var numeralCodes = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],       
    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM","MV"]];     
    
    
    function convertToRoman(num) {
      
    var number="";
    var digits=num.toString().split('').reverse();
    for(var i=0;i<digits.length;i++)
      number=numeralCodes[i][parseInt(digits[i])] + number;
      return number;            
     
    }
    
    convertToRoman(36);