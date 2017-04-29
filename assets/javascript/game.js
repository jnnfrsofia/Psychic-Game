		//Set my array for all of the letters of the alphabet and the user's guesses
		var alphabet = ['a ', 'b ', 'c ', 'd ', 'e ', 'f ', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var guesses = [];



		//To start the game, set the following Variables: Wins, Losses & Guesses Left
		var Wins = 0;
		var Losses = 0;
		var guessesLeft = 9;


		//Create the function for when the user presses their key guess; create the userGuess variable; push the user's guess to the guesses array; set the computer guess variable
		document.onkeyup = function(event) {

		    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		    var userGuess = event.key;
		    guesses.push(userGuess);
		    console.log(guesses);



		    //Set up the if/else statements
		    //if the user's guess === the computer's guess, the var Wins counter increases by 1 && game resets

		    if (userGuess === compGuess) {
		        Wins++;
		        guessesLeft = 9;
		        guesses = [];

		    }



		    //else user's guess does not === computer's guess the Guesses left var decreases by 1 until it reaches 0; then the var Losses counter increases by 1 && the game resets
		    else if (userGuess != compGuess) {
		        guessesLeft--;
		        //when guessLeft=0 the var Losses counter increases by 1 and guessesLeft=9 and guesses array []
		        if (guessesLeft === 0) {
		            guessesLeft = 9;
		            guesses = [];
		            Losses++;

				}
		    }




		    // Here we create the HTML that will be injected into our div and displayed on the page.
		    var html = "<h1>The Psychic Game</h1>" +
		        "<p>Guess what letter I'm thinking of</p>" +
		        "<p>Wins: " + Wins + "</p>" +
		        "<p>Losses: " + Losses + "</p>" +
		        "<p>Guesses Left: " + guessesLeft + "</p>" +
		        "<p>Your Guesses So Far: " + guesses + "</p>";

		    // Injecting the HTML we just created into our div and updating the game information on our page.
		    document.querySelector("#game").innerHTML = html;

		}
