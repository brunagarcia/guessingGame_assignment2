$(function () {

  $("#startGame")
    .click(function () {
      startGame();
    })

  //0 - Get user Name
  function getUserName() {
    let name = prompt('What is your name?');
    console.log('get user name check');
    alert('Hello ' + name + "! Let's play a guessing game.");
    return name;
  }

  //1 - get max number from user
  function getMaxFromUser() {
    maxGuess = prompt('Choose the maximum range of the guess?');
    if (isNaN(maxGuess)) {
      maxGuess = prompt('Plase choose a valid number... No words!');
    }
    return Number(maxGuess);
  }

  //2 - Generate random number with base on userMax
  function generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //3 - Get user guess
  function getGuessFromUser() {
    let userGuess = prompt('Choose a number between 1 to ' + maxGuess + '?');
    if (isNaN(userGuess)) {
      userGuess = prompt('You gotta type a NUMBER please! Between 1 to ' + maxGuess + '?');
    }
    console.log('Get initial guess ' + userGuess + ' check');
    return Number(userGuess);
  }

  //4 - Check Guess value
  function isGuessCorrect(goal, guess) {
    if (goal === guess) {
      return true;
    } else {
      return false;
    }
  }

  //----> Starting game function
  function startGame() {
    let min = 1;

    //declare variables to call the functions:
    let maxTry = 5;
    let name = getUserName();
    let maxGuess = getMaxFromUser();
    let goal = generateRandomNumber(maxGuess, min);
    let userGuess = getGuessFromUser();
    let guessCheck = isGuessCorrect(goal, userGuess);

    //Matching goal x guess
    for (i = 0; i < maxTry; i++) {

      guessCheck = isGuessCorrect(goal, userGuess);

      if (userGuess === 0) {
        alert("You try 0 and it's not valid. Play again!");
        return;

      } else if (!isNaN(userGuess) && goal < userGuess) {
        userGuess = prompt('Too high, try another number');

      } else if (!isNaN(userGuess) && goal > userGuess) {
        userGuess = prompt('Too low, try another number!');

      } else if (isNaN(userGuess)) {
        userGuess = prompt('You gotta type a NUMBEEEER!!! Try again!');

      } else {
        alert('You just WON! Congratulations!');
        guessCheck = isGuessCorrect(goal, userGuess);
        return;
      }
    }
    alert('You have used all your ' + i + ' attempts! Loser!');
  }

})