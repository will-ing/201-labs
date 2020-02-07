'use strict'

var yName = prompt('what is your name?'); // enter name

var correctAns = []; // arr for ttl crt ans

var arrq = [ // questions 1-5
  'Is my favorite color blue?',
  'I drive my truck to school, correct?',
  'Alright ' + yName + ', you think I like the mariners?',
  'I\'ve jumped out of an airplane before, true or false?',
  'Do I own a home, yes or no?']

var arrone = [ // answer one 1-5
  'That was a lucky guess',
  'Nope I take the train less gas and less traffic.',
  'building momentum!',
  'Multiple times, ' + yName + '!',
  'Good guess, it is a lot of work!']

var arrtwo = [// answer tow 1-5
  'Well now you only missed one',
  'Look at the brains on ' + yName + '!',
  'Keep practicing!',
  'Negative ghost rider!',
  'Maybe this isn\'t your kind of game']

name() // this starts the game

thankYou() // lets you know its over and gives ttl crt

function name() {
  
  var conf = confirm('Welcome ' + yName + ' do you want to play a game?'); // ret true to init game.

  if (conf === true) {
    combine(arrq[0], arrone[0], arrtwo[0]); // first question

    combine(arrq[1], arrone[1], arrtwo[1]); // second question

    combine(arrq[2], arrone[2], arrtwo[2]); // third question

    combine(arrq[3], arrone[3], arrtwo[3]); // fourth question

    combine(arrq[4], arrone[4], arrtwo[4]); // fifth question

    mNum(); // this runs question 6 & 7 Loops are unique

  } else { // exits out --> runs thankyou func
    alert('Don\'t be a square!') 
  }
}

function combine(q, rone, rtwo) { // uses 3 parameters 
  var que = prompt(q); // prompts question and stores answer
  
  if  (que.toLowerCase().trim() === 'yes' || que.toLowerCase().trim() === 'true') { // evaluates if ans is true || false
    alert(rone); // gives alert arg for crt ans
    correctAns.push(1); // add to arr ttl crt
  } else {
    alert(rtwo); // gives alert arg for wrg ans
  }
}

function mNum() {
  // question 6
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
