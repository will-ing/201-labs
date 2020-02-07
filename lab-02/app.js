'use strict'

var yName = prompt('what is your name?'); // enter name

var correctAns = []; // arr for ttl crt ans

function name() {
  
  var conf = confirm('Welcome ' + yName + ' do you want to play a game?'); // ret true to init game.

  if (conf === true) {
    mColor(); // prompts next question
  } else { // exits out --> runs thankyou func
    alert('Don\'t be a square!') 
  }
}


function mColor() {
  // first question prompting yes or no
  var myFavColor = prompt('Is my favorite color blue?');

  if (myFavColor.toLowerCase().trim() === 'yes' || myFavColor.toLowerCase().trim() === 'true') {
  // console.log('That was a lucky guess');
    alert('That was a lucky guess');
    correctAns.push(1); // add to arr ttl crt
    mCommute(); // prompts next question
  } else  {
    // console.log('Well now you only missed one');
    alert('Well now you only missed one');
    mCommute(); // prompts next question
  }
}

function mCommute() {
  // 2nd question 
  var myCommute = prompt('I drive my truck to school, correct?');

  if (myCommute.toLowerCase().trim() === 'yes' || myCommute.toLowerCase().trim() === 'true') {
  // console.log('Nope I take the train less gas and less traffic.');
    alert('Nope I take the train less gas and less traffic.');
    correctAns.push(1); // add to arr ttl crt
    mFavTeam(); // prompts next question
  } else {
    // console.log('Look at the brains on ' + name + '!')
    alert('Look at the brains on ' + yName + '!');
    mFavTeam(); // prompts next question
  }
}

function mFavTeam() {
  // 3rd question
  var myFavTeam = prompt('Alright ' + yName + ', you think I like the mariners?');

  if (myFavTeam.toLowerCase().trim() === 'yes' || myFavTeam.toLowerCase().trim() === 'true') {
  //  console.log('building momentum!');
    alert('building momentum!');
    correctAns.push(1); // add to arr ttl crt
    mJump(); // prompts next question
  } else {
  //  console.log('Keep practicing!');
    alert('Keep practicing!')
    mJump(); // prompts next question
  }
}

function mJump() {
  // 4th question
  var myJump = prompt('I\'ve jumped out of an airplane before, true or false?');

  if (myJump.toLowerCase().trim() === 'yes' || myJump.toLowerCase().trim() === 'true') {
  //  console.log('Multiple times, ' + yName + '!');
    alert('Multiple times, ' + yName + '!');
    correctAns.push(1); // add to arr ttl crt
    mHouse(); // prompts next question
  } else {
  //  console.log('Negative ghost rider!');
    alert('Negative ghost rider!')
    mHouse(); // prompts next question
  }
}

function mHouse() {
  // 5th question
  var myHouse = prompt('Do I own a home, yes or no?');

  if (myHouse.toLowerCase().trim() === 'yes' || myHouse.toLowerCase().trim() === 'true') {
  //  console.log('Good guess, it is a lot of work!');
    alert('Good guess, it is a lot of work!');
    correctAns.push(1); // add to arr ttl crt
  } else {
  //  console.log('Maybe this isn\'t your kind of game');
    alert('Maybe this isn\'t your kind of game')
    
  }
  mNum() // prompts next question
}



function mNum() {
  // queston 6
  for(var i = 4; i > 0; i--) { // reduces after every iterations
    var myFavNum = prompt('I\'ll give you ' + i + ' chances to guess my favorite number.'); // prompts you and shows remaining guesses
  
      if (myFavNum === '8') { // crt ans to break loop
        //  console.log('Good guess');
          alert('Good guess!');
          correctAns.push(1); // add to arr ttl crt
          break; // breaks loop and cont
        } else if (myFavNum < 8) {
        // console.log('Think bigger')  
          alert('think bigger')
        } else if (myFavNum > 8) {
        // console.log('Think smaller')
          alert('Think smaller');
        } else {
        //  console.log('Try again');
          alert('Try again');
          
        }
   } 
   mVehicles() // prompts next question
}

function mVehicles() {
// question 7
  var myCars = ['chevrolet', 'bmw', 'ford', 'dodge']; // my arr
  outer: // to break the outer loop
  for(var i = 6; i > 0; i--) { // this will run 6 time counting backwards
    var myVehicles = prompt('Name a car I have owned! You have ' + i + ' tries!'); /// This will give a prompt with the remaining chances
    for (var j = 0; j < myCars.length; j++)
      if (myVehicles === myCars[j]) { // eval each sect of arr
        alert('nice');
        correctAns.push(1); // this will add to the arr that has our ttl crt 
        break outer; // breaks outer loop and cont
      } 
    alert('try again!');
      
    }
  alert('These are the vehicles I have owned ' + myCars[0] + ' ' + myCars[1] + ' ' + myCars[2] + ' ' + myCars[3] + '.' ); // displays the crt ans
  }
  
  


function thankYou() {
  alert('Thanks for playing and getting to know me ' + yName + '! You got ' + correctAns.length + ' correct'); // counts arr and gives crt ans ttl
}


name() // this starts the game
//mNum()
//mVehicles()
thankYou() // lets you know its over and gives ttl crt