function rot13(str) {
    let arr=[];
    let s='';
    for(let i=0;i<str.length;i++){
      if(str.charCodeAt(i) >=65 && str.charCodeAt(i)<=77){
        arr[i]=str.charCodeAt(i)+13;
      }
      if(str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90){
        arr[i]=str.charCodeAt(i)-13;
      }
      if(str.charCodeAt(i)>91){
        arr[i]=str.charCodeAt(i);
      }
      if(str.charCodeAt(i)<65){
        arr[i]=str.charCodeAt(i);
      }
      
    }
    for(let i=0;i<str.length;i++){
      s+=String.fromCharCode(arr[i]);
    }
      return s;
    }
    
    rot13("SERR PBQR PNZC");