numberToWords(1)
displayWeekday(9)
quadraticOperationAndMinAndMax(2,3,5)
function numberToWords(n){
    if(n==0){
        console.log("zero")
    }
    if(n==1){
        console.log("one")
    }
    if(n==2){
        console.log("two")
    }
    if(n==3){
        console.log("three")
    }
    if(n==4){
        console.log("four")
    }
    if(n==5){
        console.log("five")
    }
    if(n==6){
        console.log("six")
    }
    if(n==7){
        console.log("seven")
    }
    if(n==8){
        console.log("eight")
    }
    if(n==9){
        console.log("nine")
    }
}
function quadraticOperationAndMinAndMax(a,b,c){
    let val1=a+b*c
  let val2=   c+a/b;
  let val3=   a%b+c;
   let val4=  a*b+c;
   console.log( Math.max(val4, Math.max(val3, Math.max(val1, val2))))
   console.log( Math.min(val4, Math.min(val3, Math.min(val1, val2))))
}
function displayWeekday(n){
    if(n==1){
console.log("Sunday")
    }
    if(n==2){
        console.log("Monday")
    }
    if(n==3){
        console.log("Tuesday")
    }
    if(n==4){
        console.log("Wednesday")
    }
    if(n==5){
        console.log("Thursday")
    }
    if(n==6){
        console.log("Friday")
    }
    if(n==7){
        console.log("Saturday")
    }
    if(n<1||n>7){
        console.log("Invalid day")
    }
}