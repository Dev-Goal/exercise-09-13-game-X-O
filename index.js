// Khởi tạo
let game = document.getElementById("carogame");
let data = "";
let board = [];
let h = 1;
//Tạo mảng 2 chiều
for (let i = 0; i < 5; i++) {
  board[i] = new Array(".", ".", ".",".",".");
}
//Xử lý hiển thị ban đầu
for (let i = 0; i < 5; i++) {
  data += "<br>";
  for(let j=0; j<5;j++){
    data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  }
}
game.innerHTML = data;
//xử lý nút chơi
let btnGame = document.getElementById("btnGame");
btnGame.addEventListener("click", getGame);
function getGame(){
    data = "";
    let positionX = Number(prompt("Position X"));
    let positionY = Number(prompt("Position Y"));
    if(h%2===0){
        board[positionX][positionY] = "X";
    }else{
        board[positionX][positionY] = "O";
    }
    h++;
    for(let i = 0;i<5;i++){
        data += "<br>";
        for(let j=0;j<5;j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    game.innerHTML = data;
    
    //xử lý nếu X hoặc O thắng
    for(let i = 0; i<5;i++){
        for(let j=0;j<5;j++){
            if(board[i][j] === "X"&& board[i][j+1] === "X"&&board[i][j+2] === "X" || board[i+1][j] === "X"&&board[i+2][j] === "X"&&board[i+3][j] === "X"){
                alert("X chiến thắng")
            }else if(board[i][j] === "O"&& board[i][j+1] === "O"&&board[i][j+2] === "O" || board[i+1][j] === "O"&&board[i+2][j] === "O"&&board[i+3][j] === "O"){
                alert("O chiến thắng");
            }
        }
    }
}