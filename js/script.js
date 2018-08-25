const die = document.querySelector(".die")
const roll = document.querySelector(".roll")
const img = document.querySelector("img")
const players = [
    {player: document.querySelector('.player1'),location:0},
    {player: document.querySelector('.player2'),location:0},
    {player: document.querySelector('.player3'),location:0},
    {player: document.querySelector('.player4'),location:0},
]
//game state variables
const numPlayers = players.length;
let turn = 0;
const maxroll = 6;
const maxSpots = getSpots().length -1;
//define function
function rollDie(){
    // console.log("Rolling die")
    //clear out the previous number on the die
    roll.textContent ="";
    // then seitch the regular pic with the WebGLUniformLocation
    img.src = 'img/Dodecahedron3.gif';
    setTimeout(() => {
    // get a random number
        const num =Math.ceil(Math.random() * maxroll);
    // display the number
    roll.textContent= num;
    // move the players
    movePlayer(num,getSpots());
    // then change the turn
    changeTurn()
    },1700);
}
function movePlayer(num,spots){
//increment the players location by how much i rolled
players[turn].location +=num;
//once i go around the board set it back to zero and then continue
players[turn].location = (players[turn].location > maxSpots) ? players[turn].location - maxspots :players[turn].location +1;
//going to use appendchild on the spot given that location to add my player element
spots[players[turn].location].appendChild(players[turn].player)
}
function changeTurn(){
    turn = (turn >= numPlayers -1) ? 0 : turn + 1
}
//add eventlistener and run function
die.addEventListener('click',rollDie)
roll.addEventListener('click',rollDie)