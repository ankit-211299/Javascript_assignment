//Create a 2D array representing a tic-tac-toe board (3x3 grid).
let arr = [
    ["X","O","X"],
    [" ","X","O"],
    ["X"," ","O"]];

//Write a function to print the board.

let printBoard = (board) => {
    console.log(board.map(row => row.join(" | ")).join("\n---------\n"));
};

printBoard(arr);

//Write a function to check if a player has won (e.g., three X's or O's in a row).
let winner = (board,player) => {
    for(var i=0;i<3;i++){
        if((board[i][0]==player && board[i][1]==player && board[i][2]==player)||
        (board[0][i]==player && board[1][i]==player && board[2][i]==player)){
            return true;
        }
    }

    if((board[0][0]==player && board[1][1]==player && board[2][2]==player) ||
    (board[0][2]==player && board[1][1]==player && board[2][0]==player)){
        return true;
    }
    return false;
};

if(winner(arr,"X")==true) console.log("Winner is X");
else if(winner(arr,"O")==true) console.log("Winner is O");
else console.log("It's a draw");

//Simulate a game of tic-tac-toe and determine the winner.
// Pending ......