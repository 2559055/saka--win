function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if (rideDistance <= 400){
    return "gives customers a free sample";
  
  }
  else if (rideDistance > 2000)
  {
return "charges 30 dollars for a distance over 2000 feet";

  }
  else if (rideDistance > 2500)
  {


    return "does not allow rides over 2500 feet";
  }
  
}
console.log(scuberGreetingForFeet(400))


function ternaryCheckCity(nycDistance){
    // Write your code here!
    if (nycDistance){
        return "ok";
    }

else {
    return "no go";
}
}
    

console.log(ternaryCheckCity(false))
   
function switchOnCharmFromTip(tibIsGenerous){
 // Write your code here!
 if (tibIsGenerous){
    return "thank you so much";
 }  else
 {return "thank you";
} 
;
    
 
 

}
console.log(switchOnCharmFromTip(true))