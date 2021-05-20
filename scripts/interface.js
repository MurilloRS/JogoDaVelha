document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleCLick);
    })

})

function handleCLick(event) {

    let square = event.target;
    let position = square.id;


   
    if (handleMove(position)) {
        setTimeout(() => {
            alert(" O Jogo Acabou - O vencedor foi o " + playerTime);
        },10);
    };

    updateSquare(position);
    // updateSquares();

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`
    }
}



// function updateSquares() {

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }
//     })
// }