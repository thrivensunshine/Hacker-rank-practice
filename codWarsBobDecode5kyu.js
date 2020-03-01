function decoder(input, marker) {
  let start = []
  let end = []
  
  let splitIt = input.split(marker)
// console.log(splitIT)
  for(let i = 0; i < splitIt.length; i++){
    if(i % 2 !== 0 ){
     end.unshift(splitIt[i].split('').reverse().join("") )
     }
     else{
       start.push(splitIt[i])
     }
    
  }
  let whole = [...start, ...end]
  return whole.join("")
}
