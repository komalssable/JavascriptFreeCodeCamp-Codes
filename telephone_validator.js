function telephoneCheck(str) {

    let num=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if(num.test(str)){
      return true;
      }
      
    
      return false;
    }
    
    telephoneCheck("555-555-5555");