function palindrome(str) {
    let reverse="";
    let old=str.replace(/[\W_]/g, "").toLowerCase();
    for(let i=old.length-1;i>=0;i--)
      reverse=reverse + old[i];
   
   if(old === reverse){
     return true;
   }
   else
   return false;
  }
  
  
  
  palindrome("eye");