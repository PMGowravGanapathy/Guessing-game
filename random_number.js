const max=prompt("enter maximum number");
const random=Math.floor(Math.random()*max)
console.log(random);
let guess=prompt("guess number");
while(true){
  if(guess=='quit'){
    console.log('user quit');
    break;
  }
  if(guess==random){
    console.log('correct guess random number was',random);
    break;
  }
  else if(guess<random){
    prompt('HINT:your guess is too small!!Try again');
  }
  else if(guess>random){
    prompt('HINT:your guess is too large!!Try again');
  }
  else{
    guess=prompt("wrong guess!!!Please try again");
  }
}