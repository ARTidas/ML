document.addEventListener("DOMContentLoaded", function(event) {
    
    const game_size = 3;
    const game_arguments = [
        game_size,
        0,
        600,
        600
    ];

    new Sudoku(game_arguments).run();

});

