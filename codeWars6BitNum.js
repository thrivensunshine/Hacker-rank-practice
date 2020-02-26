String.prototype.sixBitNumber = function() {
console.log(this)
  if(this.match( /[^0-9][\w\s]|_^0[0-9]/g) || this.match( /^0[0-9].*$/)|| this.match(/\s/g)) {
  return false
  }
 if(0 <= parseInt(this) && parseInt(this) < 64 ){ 
   return true
   } else return false
}

console.log("".sixBitNumber())
//, false);
console.log("0".sixBitNumber())
//, true);
console.log("00".sixBitNumber())
//, false);
console.log("55".sixBitNumber())
//, true);
console.log("63".sixBitNumber())
//, true);
console.log("64".sixBitNumber())
//, false);
console.log("-0".sixBitNumber())
//, false);
console.log("-5".sixBitNumber())
//, false);
console.log("05".sixBitNumber())
//, false);
console.log("5".sixBitNumber())
//, true);
