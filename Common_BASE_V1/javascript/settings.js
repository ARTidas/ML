const settings = {
    number_of_robots: 20,
    robot_color: '#0f0',
    robot_starting_position_x: 15,
    robot_starting_position_y: 15,
    robot_width: 20,
    robot_movement_min: -1,
    robot_movement_max: 1,
    robot_population_size: 20,

    target_color: 'red',
    target_search_treshold: 10,
    target_width: 20,

    //kNearestNeighbors:
    knn_k: 3, // Number of nearest neighbors to consider

    //Regression
    regression_learning_rate: 0.0000001,
    regression_number_of_iterations: 20,
};

const target_types = [
    {
        color: 'red',
        shape: 'circle',
        width: settings.target_width,
        edible: true,
    },
    {
        color: 'yellow',
        shape: 'circle',
        width: settings.target_width,
        edible: true,
    },
    {
        color: 'blue',
        shape: 'circle',
        width: settings.target_width,
        edible: true,
    },
    {
        color: 'red',
        shape: 'circle',
        width: settings.target_width + 10,
        edible: true,
    },
    {
        color: 'yellow',
        shape: 'circle',
        width: settings.target_width + 10,
        edible: true,
    },
    {
        color: 'blue',
        shape: 'circle',
        width: settings.target_width + 10,
        edible: true,
    },
    {
        color: 'red',
        shape: 'rect',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'yellow',
        shape: 'rect',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'blue',
        shape: 'rect',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'red',
        shape: 'rect',
        width: settings.target_width + 10,
        edible: false,
    },
    {
        color: 'yellow',
        shape: 'rect',
        width: settings.target_width + 10,
        edible: false,
    },
    {
        color: 'blue',
        shape: 'rect',
        width: settings.target_width + 10,
        edible: false,
    },
    {
        color: 'red',
        shape: 'triangle',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'yellow',
        shape: 'triangle',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'blue',
        shape: 'triangle',
        width: settings.target_width,
        edible: false,
    },
    {
        color: 'red',
        shape: 'triangle',
        width: settings.target_width + 10,
        edible: false,
    },
    {
        color: 'yellow',
        shape: 'triangle',
        width: settings.target_width + 10,
        edible: false,
    },
    {
        color: 'blue',
        shape: 'triangle',
        width: settings.target_width + 10,
        edible: false,
    },
];