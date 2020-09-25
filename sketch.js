var db;
var gameState = 0;
var playercount;
var game , player,form;
function setup(){
    createCanvas(500,500);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("white");
   
}

