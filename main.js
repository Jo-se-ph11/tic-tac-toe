const gameBoard = () => {
        const cards = document.querySelectorAll('.cards');
        const display = document.querySelector(".display");
        const users = {

            player1: "X",
            player2: "O",
        };
        display.textContent = `Player ${users.player1} turn`;
        startGame();
        function startGame(){

          cards.forEach(card => {
              card.addEventListener('click', getClicks);
          });
          restartGame()
        };

        function getClicks(e){
          checkWinner();
          const card = e.target;

          if(display.textContent === `Player ${users.player1} turn` && card.textContent === "") {
            card.textContent = `${users.player1}`;
            display.textContent = `Player ${users.player2} turn`;
          }else if(display.textContent === `Player ${users.player2} turn` && card.textContent === "") {
            card.textContent = `${users.player2}`;
            display.textContent = `Player ${users.player1} turn`;
          }
        };
        
        function checkWinner(){
          const zero = document.querySelector("#zero");
          const one = document.querySelector("#one");
          const two = document.querySelector("#two");
          const three = document.querySelector("#three");
          const four = document.querySelector("#four");
          const five = document.querySelector("#five");
          const six = document.querySelector("#six");
          const seven = document.querySelector("#seven");
          const eight = document.querySelector("#eight");
          if(zero.textContent == "X" && one.textContent == "X" && two.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(zero.textContent == "O" && one.textContent == "O" && two.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(three.textContent == "X" && four.textContent == "X" && five.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(three.textContent == "O" && four.textContent == "O" && five.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(six.textContent == "X" && seven.textContent == "X" && eight.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(six.textContent == "O" && seven.textContent == "O" && eight.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(zero.textContent == "X" && three.textContent == "X" && six.textContent == "X"){
            console.log("first column X")
            display.textContent = "PLAYER X WINS";
          }else if(zero.textContent == "O" && three.textContent == "O" && six.textContent == "O"){
            console.log("first column O")
            display.textContent = "PLAYER O WINS";
          }else if(one.textContent == "X" && four.textContent == "X" && seven.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(one.textContent == "O" && four.textContent == "O" && seven.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(two.textContent == "X" && five.textContent == "X" && eight.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(two.textContent == "O" && five.textContent == "O" && eight.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(zero.textContent == "X" && four.textContent == "X" && eight.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(zero.textContent == "O" && four.textContent == "O" && eight.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }else if(two.textContent == "X" && four.textContent == "X" && six.textContent == "X"){
            display.textContent = "PLAYER X WINS";
          }else if(two.textContent == "O" && four.textContent == "O" && six.textContent == "O"){
            display.textContent = "PLAYER O WINS";
          }
            
        };

        function restartGame() {
            const restartButton = document.querySelector(".btn");
            restartButton.addEventListener("click", () => {
                cards.forEach(card => {
                    card.textContent = "";
                });
                display.textContent = `Player ${users.player1} turn`;
            })
            
        };
}    
gameBoard();