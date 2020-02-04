'use strict'

var yName = prompt('what is your name?');

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
    thankYou();
  } else {
  //  console.log('Maybe this isn\'t your kind of game');
    alert('Maybe this isn\'t your kind of game')
    thankYou();
  }
}

function thankYou() {
  alert('Thanks for playing and getting to know me ' + yName + '!');
}
name();
