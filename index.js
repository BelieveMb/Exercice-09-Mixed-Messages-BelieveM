
//start project
//my project give the random words of motivation
/*how do it ?
  ->a list of message in array
  ->generate random number between 0 to array length
  ->choice the content of number and show 
*/
const messages = ["Succès", "Bravoure", "Strong", "Speed","Make It better"];
function randomNumber(){
    return Math.floor(Math.random()*messages.length);
}

// console.log(randomNumber(2));
console.log(messages[randomNumber()]);
