const View = require("./ttt-view");// require appropriate file
const Game = require("/Users/appacademy/Desktop/W6D2/skeleton/dist/game");// require appropriate file


  $(() => {
    const funGame = new Game();
    console.log("is this working");
    let $ttt = $(".ttt");
    // console.dir($ttt);
    const firstview = new View(funGame, $ttt);
    firstview.bindEvents();
  });
