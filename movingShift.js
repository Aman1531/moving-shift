
s = "I should have known that you would have a perfect answer for me!!!"
shift = 1
console.log(movingShift(s, shift))

function movingShift(s, k) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
  
      let charCode = s[i].charCodeAt();
      // check that charCode is a lowercase letter; automatically ignores non-letters
      if (charCode > 96 && charCode < 123) {
        
        charCode += k % 26 // makes it work with numbers greater than 26 to maintain correct shift
        // if shift passes 'z', resets to 'a' to maintain looping shift
        if (charCode > 122) {
          charCode = (charCode - 122) + 96;
        // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
        } else if (charCode < 97) {
          charCode = (charCode - 97) + 123;
        }
      }
  
      if (charCode > 64 && charCode < 91) {
        
        charCode += k % 26
        
        if (charCode > 90) {
          charCode = (charCode - 90) + 64;
        } else if (charCode < 65) {
          charCode = (charCode - 65) + 91;
        }
      }
  
      result += String.fromCharCode(charCode);
      k++;
    }
    
    let start = 0
    let final = []
    my_split(result.length).forEach(end => {
        if (end)
        final.push(result.substr(start,end))
        else
        final.push("")
    start += end 
    }); 
   
    return final;

    
  }

  function my_split(len) {
    let parts = []
    let s = len
    let residue = len/5 - Math.floor(len/5)
    let c = Math.ceil(len/5)
    if(residue  ) {
        while(s >= c ) { 
        parts.push(c)
        s -= c
        }
        parts.push(s)
        if (parts.length < 5)
         parts.push(0) 
    }
    else
    parts =  [len/5,len/5,len/5,len/5,len/5]
return parts
  }