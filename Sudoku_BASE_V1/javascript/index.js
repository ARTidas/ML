document.addEventListener("DOMContentLoaded", function(event) {

    let game_arguments = [
        3, // game size
        0,
        600,
        600
    ];

    const selection = document.getElementsByClassName("new_game");
    for(let i = 0; i < selection.length; i++) {
        selection[i].addEventListener(
            "click",
            () => newGame(selection[i].value)
        )
    }

    function newGame(game_size) {
        game_arguments[0] = game_size;
        console.log("Generating new game...: " + game_arguments);
        document.getElementById("iteration_counter").innerHTML = "Generating new game...: " + game_arguments;
        new Sudoku(game_arguments).run();
    }

});

