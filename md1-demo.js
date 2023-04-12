let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has better attack than jamie")}
    else if (jamieLannisterAttack > jonSnowAttack){
        console.log(" jamie has better attack than jon")
    }
 else {
    console.log("Jamie has better attack than jon")
}




let jonSnowHealth = 100
let jonSnowDefense = 0 

if (jonSnowHealth <= jamieLannisterAttack){
console.log("Jon has been slain")
} else {
    jonSnowHealth -= jamieLannisterAttack
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log("Jon's health is down to " + jonSnowHealth)
}

let coinLandHead = false

if (coinLandHead === true){
    console.log('The fight continues!')

} else {
    console.log ("Jon can run away!")
}

console.log("------")

// for(let i = 0; i < 5; i++){

// if(jonSnowHealth <= 0){
//     console.log("jon has been slain");
//  } else { jonSnowHealth -= jamieLannisterAttack
//         console.log(`Jon's health is ${jonSnowHealth}`)
//         //console.log ("Jon's health is " + jonSnowHealth)

//     }
// }

while(jonSnowHealth > 0 ){
 jonSnowHealth = jonSnowHealth - jamieLannisterAttack
//  if(jonSnowHealth < 0){
//     jonSnowHealth = 0
//  }
 console.log(`jon's health is ${jonSnowHealth}`)
 }
 if (jonSnowHealth <= 0 ){
    console.log("jon has been slain!")
 } 

