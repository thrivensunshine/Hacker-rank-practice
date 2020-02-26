String.prototype.eightBitNumber = function() {
  if(this.match( /[^0-9][\w\s]|_^0[0-9]/g) || this.match( /^0[0-9].*$/)|| this.match(/\s/g)) {
  return false
  }
 if(0 <= parseInt(this) && parseInt(this) <= 255){ 
   return true
   } else return false
}

// console.log("".eightBitNumber())
// // false);
// console.log("0".eightBitNumber())
// // true);
// console.log("00".eightBitNumber())
// // false);
// console.log("55".eightBitNumber())
// //, true);
// console.log("042".eightBitNumber())
// //, false);
// console.log("123".eightBitNumber())
// //, true);
// console.log("255".eightBitNumber())
// //, true);
// console.log("256".eightBitNumber())
// //, false);
// console.log("999".eightBitNumber())
// //, false);
// console.log("1/n".eightBitNumber())
// //false
// console.log("1 ".eightBitNumber())
