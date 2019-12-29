
let test = 'abc#d##c'
//ac 
let test2 = 'abc####d##c#'
//""
let test3 = '831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'
//6+yqw8hfklsd-=-f
let test4 ='######831###dhkj####jd#dsfsdnjkf###d####dasns'
//jdsfdasns
let test5 = '0###0###0'
//0

clean_string = (inputString) => {
  console.log(inputString)

  let arrayBitch = inputString.split('')
  let ughWork = arrayBitch.length
  // console.log(ughWork + "  work work work work work ")

  function findItChangeItGeeze(arr){
    ughWork -= 1
    let hashBaby = arr.indexOf("#")
    
    if(arr[0] === "#"){
      arr.shift()
    }

    if(!arr.includes("#")){
      return
    }
    
  
    if(arr[0] !== "#"){
    arr.splice((hashBaby-1),2)
    }

  }

  while(ughWork > 0 && arrayBitch.includes("#")){
    findItChangeItGeeze(arrayBitch)
     console.log(arrayBitch + " <--- here")
  }
  
   return arrayBitch.join("")
  }


// console.log(cleanString(test) + " test one")
// console.log(cleanString(test2) + " test two")
console.log(cleanString(test5) + " test five")
