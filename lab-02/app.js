'use strict'

var yName = prompt('what is your name?');

var correctAns = [];

function name() {
  
  var conf = confirm('Welcome ' + yName + ' do you want to play a game?');

  if (conf === true) {
    mColor();
  } else {
    alert('Don\'t be a square!')
  }
}


function mColor() {
  // first question prompting yes or no
  var myFavColor = prompt('Is my favorite color blue?');

  if (myFavColor.toLowerCase().trim() === 'yes' || myFavColor.toLowerCase().trim() === 'true') {
  // console.log('That was a lucky guess');
    alert('That was a lucky guess');
    correctAns.push(1);
    mCommute();
  } else  {
    // console.log('Well now you only missed one');
    alert('Well now you only missed one');
    mCommute();
  }
}

function mCommute() {
  // 2nd question 
  var myCommute = prompt('I drive my truck to school, correct?');

  if (myCommute.toLowerCase().trim() === 'yes' || myCommute.toLowerCase().trim() === 'true') {
  // console.log('Nope I take the train less gas and less traffic.');
    alert('Nope I take the train less gas and less traffic.');
    correctAns.push(1);
    mFavTeam();
  } else {
    // console.log('Look at the brains on ' + name + '!')
    alert('Look at the brains on ' + yName + '!');
    mFavTeam();
  }
}

function mFavTeam() {
  // 3rd question
  var myFavTeam = prompt('Alright ' + yName + ', you think I like the mariners?');

  if (myFavTeam.toLowerCase().trim() === 'yes' || myFavTeam.toLowerCase().trim() === 'true') {
  //  console.log('building momentum!');
    alert('building momentum!');
    correctAns.push(1);
    mJump();
  } else {
  //  console.log('Keep practicing!');
    alert('Keep practicing!')
    mJump();
  }
}

function mJump() {
  // 4th question
  var myJump = prompt('I\'ve jumped out of an airplane before, true or false?');

  if (myJump.toLowerCase().trim() === 'yes' || myJump.toLowerCase().trim() === 'true') {
  //  console.log('Multiple times, ' + yName + '!');
    alert('Multiple times, ' + yName + '!');
    correctAns.push(1);
    mHouse();
  } else {
  //  console.log('Negative ghost rider!');
    alert('Negative ghost rider!')
    mHouse();
  }
}

function mHouse() {
  // 5th question
  var myHouse = prompt('Do I own a home, yes or no?');

  if (myHouse.toLowerCase().trim() === 'yes' || myHouse.toLowerCase().trim() === 'true') {
  //  console.log('Good guess, it is a lot of work!');
    alert('Good guess, it is a lot of work!');
    correctAns.push(1);
  } else {
  //  console.log('Maybe this isn\'t your kind of game');
    alert('Maybe this isn\'t your kind of game')
    
  }
  mNum()
}



function mNum() {
  // queston 6
  for(var i = 4; i > 0; i--) {
    var myFavNum = prompt('I\'ll give you ' + i + ' chances to guess my favorite number.');
  
      if (myFavNum === '8') {
        //  console.log('Good guess');
          alert('Good guess!');
          correctAns.push(1);
          break;
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
   mVehicles()     
}

function mVehicles() {
// question 7
  var myCars = ['chevrolet', 'bmw', 'ford', 'dodge'];

  for(var i = 6; i > 0; i--) {
    var myVehicles = prompt('Name a car I have owned! You have ' + i + ' tries!');

    if (myVehicles === myCars[0] || myVehicles === myCars[1] || myVehicles === myCars[2] || myVehicles === myCars[3]) {
      alert('nice');
      correctAns.push(1);
      break;
    } else {
      alert('try again!');
    }
  }
  alert('These are the vehicles I have owned ' + myCars[0] + ' ' + myCars[1] + ' ' + myCars[2] + ' ' + myCars[3] + '.' );
  }
  
  


function thankYou() {
  alert('Thanks for playing and getting to know me ' + yName + '! You got ' + correctAns.length + ' correct');
}
name()
//mNum()
//mVehicles()
thankYou()