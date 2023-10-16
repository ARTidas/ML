const settings = {
    number_of_data_points: 30,
    //learning_rate: 0.000001,
    //learning_rate: 0.0000059,
    //learning_rate: 0.0000051,
      learning_rate: 0.0000049,
    iterations: 10000,

    fluctuation_from_canvas_diagonal: 100,

    //////////////////////////////// DEPRECATED //
    time_between_rounds: 100, // In milliseconds, 1000 milisecond = 1 second
    time_between_spawns: 100,
    time_between_movements: 100,
    maximum_movement: 10,

    population_starting_position_x: 15,
    population_starting_position_y: 15,

    candidate_width: 5,
    candidate_movement_min: -1,
    candidate_movement_max: 1,

    population_size: 20,
    evolve_after_cycles: 100,
    maximum_generation_number: 100,

    target_search_treshold: 10,
};