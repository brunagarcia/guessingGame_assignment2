$(function () {

  $('#guessForm').hide();
  $('#alert').hide();
  $('#alert2').hide();
  $('#alertHigh').hide();
  $('#alertLow').hide();

  // When the game starts >>>
  $("#startGame").click(function () {
    startGame();

  })

  // GameStates object
  let gameStates = {
    min: 1,
    maxTry: "",
    tries: 0,
    name: "",
    maxGuess: "",
    userGuess: "",
    goal: ""
  };

  //0 - Get user name
  function getUserName() {
    gameStates.name = $('#userName').val();
    console.log(`${gameStates.name} check!`);
    $("#textDisplay").append(`<h2 class='row justify-content-center'> 
											Hello ${gameStates.name}! </span>
											</h2>`);
    return name;
  }

  //Calling the getUserName function.
  $('#userName')
    .change(function () {
      getUserName();
    })

  //1 - Choose level of difficult, called on start game func.
  function chooseDifficult() {
    console.log("Choose level of difficult.")
    let level = Number($('#levels').val())
    if (level === 1) {
      gameStates.maxTry = 10;

    } else if (level === 2) {
      gameStates.maxTry = 8;

    } else if (level === 3) {
      gameStates.maxTry = 4;
    }
  }

  //2 - get max number from user
  function getMaxFromUser() {
    console.log("get max number from user")

    if (isNaN($('#userMax').val())) {
      $('#alert').show();
    } else {
      gameStates.maxGuess = Number($('#userMax').val())
      $("#textDisplay").append(`<h2 class='row justify-content-center'> 
                      Guess a number between 
                      <span class="orange"> 1 </span>
                      and <span class="orange"> ${gameStates.maxGuess} </span>
                      </h2>`);
      generateRandomNumber(gameStates.maxGuess, gameStates.min);
    }
  }

  //Calling function to get max number from User.
  $('#userMax')
    .change(function () {
      $('#alert').hide();
      getMaxFromUser();
    })

  //3 - Generate random number with base on userMax called on Game Start func.
  function generateRandomNumber(max, min) {
    console.log("Generate random number with base on userMax")
    gameStates.goal = Math.floor(Math.random() * (max - min)) + min;
  }

  //4 - Get user guess.
  function getGuessFromUser() {
    $('#alertHigh').hide();
    $('#alertLow').hide();
    console.log("Get user guess func running!")
    console.log(`passing the goal number ${gameStates.goal}`)
    gameStates.userGuess = Number($("#guessUser").val())
    //checking guess is number:
    if (isNaN(gameStates.userGuess)) {
      $('#alert2').show();
      $('#guessForm')
        .find('input:text')
        .val('');
    } else {
      $('#alert2').hide();
      isGuessCorrect(gameStates.goal, gameStates.userGuess);
    }
  }

  //Calling function getGuessFromUser!
  $('#guessForm')
    .submit(function (event) {
      event.preventDefault();
      getGuessFromUser();
      $('#guessForm')
        .find('input:text')
        .val('');
    })

  function isGuessCorrect(goal, guess) {
    console.log("is guess correct running!")
    console.log(`passing the goal number ${goal}`)
    // Matching goal x guess
    if (gameStates.maxTry != gameStates.tries) {
      console.log(gameStates.maxTry);
      console.log(gameStates.tries);
      console.log(guess);

      if (guess === 0) {
        alert("You try 0 and it's not valid. Play again!");
        location.reload();
        return;
        return;
      } else if (goal < guess) {
        gameStates.tries += 1;
        $('#alertHigh').show();

      } else if (goal > guess) {
        gameStates.tries += 1;
        $('#alertLow').show();

      } else {
        alert('You just WON! Congratulations!');
        location.reload();
        return;
      }
    } else {
      alert('You just wasted all your tries!');
      location.reload();
      return;
    }
  }

  //----> Starting game function
  function startGame() {
    $('#initialForm').hide();
    $('#guessForm').show();
    chooseDifficult();

    console.log("Start Game Func running...")
  }
})
