class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
    this.$el = $el;
    this.game = game;
  }
  bindEvents() {
    const $ul = $('ul');
    $ul.on('click', 'li', (event) => {
      this.makeMove($(event.target));
    });

  }
    
  makeMove($square) {
    try {
      // debugger
      console.log($square.data());
      $square.text(this.game.currentPlayer);
      this.game.playMove($square.data('pos'));
      $square.attr('class', 'selected');
    } catch(MoveError) {
      alert("Square already taken!");
    }

    if (this.game.isOver()) {
      alert(`${this.game.winner()} congrats`);
      this.endGame();
    }


  }

  endGame() {
    const $ul = $('ul');
    $ul.off("click","li");
    
    // $ul.children().each((el)=>$('el').off("click"));

  }

  setupBoard() {
    const $ul = $("<ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    return $ul;
  }

}

module.exports = View;
