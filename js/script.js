//Document ready function:
$(function () {
      // Function/Object to keep player info 
      function userPerTurn(name, maxGuess) {
          this.playerName = playerName,
          this.maxGuess = maxGuess,
          this.guessNumbers = []
      }

      //0 - Get user Name

      function getUserName() {
        $("#firstButton").click(function () {
          userPerTurn.name = $("#playerName").val();
          return (console.log(userPerTurn.playerName));
        })
      }

      getUserName();

      // console.log(getUserName());

      // //1 - get max number from user
      // function getMaxFromUser() {
      //   maxGuess = prompt('Choose the maximum range of the guess?');
      //   console.log('get max from user check');
      //   return Number(maxGuess);
      // }

      // // console.log(getMaxFromUser());

      // //2 - Generate random number with base on userMax
      // function generateRandomNumber(max, min) {
      //   return Math.floor(Math.random() * (max - min)) + min;
      //   // console.log('Generate random number check');
      //   // return Number(goal);
      // }

      // // console.log(generateRandomNumber());

      // //3 - Get user guess
      // function getGuessFromUser() {
      //   let userGuess = prompt('Choose a number between 1 to ' + maxGuess + '?');
      //   console.log('Get initial guess ' + userGuess + ' check');
      //   return Number(userGuess);
      // }

      // //console.log(getGuessFromUser());

      // //4 - Check Guess value
      // function isGuessCorrect(goal, guess) {
      //   // console.log(guess);
      //   if (goal === guess) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }

      // //----> Starting game function
      // function startGame() {
      //   let min = 1;

      //   //declare variables to call the functions:
      //   let maxTry = 5;
      //   let name = getUserName();
      //   let maxGuess = getMaxFromUser();
      //   let goal = generateRandomNumber(maxGuess, min);
      //   let userGuess = getGuessFromUser();
      //   let guessCheck = isGuessCorrect(goal, userGuess);

      //   //Matching goal x guess
      //   for (i = 0; i < maxTry; i++) {
      //     guessCheck = isGuessCorrect(goal, userGuess);
      //     if (goal < userGuess) {
      //       userGuess = prompt('Too high, try another number');
      //       // userGuess = getGuessFromUser();
      //     } else if (userGuess == 0) {
      //       alert("You try 0 and it's not valid. Play again!");
      //       return;
      //     } else if (goal > userGuess) {
      //       userGuess = prompt('Too low, try another number!');
      //       // userGuess = getGuessFromUser();
      //     } else {
      //       alert('You just WON! Congratulations!');
      //       guessCheck = isGuessCorrect(goal, userGuess);
      //       return;
      //     }
      //   }
      //   alert('You have used all your ' + i + ' attempts! Loser!');
      // }