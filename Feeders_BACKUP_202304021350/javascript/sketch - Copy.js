let canvas;
let destination;

class Genesys {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.fitness_score = null;
    };

    getX() {
        return this.x;
    };
    getY() {
        return this.y;
    };
};

class Target extends Genesys {
    constructor() {
        super();
        this.x = getCanvasWidth() - settings.population_starting_position_x * 2;
        //this.y = getCanvasHeight() - settings.population_starting_position_y * 2;
        this.y = 0 + settings.population_starting_position_y * 2;
    };

    display() {
        fill('#0f0');
        circle(
            this.x,
            this.y,
            settings.candidate_width
        );
    };
};

class Hud {
    constructor() {
        this.display_position_x           = 20;
        this.display_position_y           = 20;
        this.display_position_increment_y = 20;
        this.move_number                  = 0;
        this.generation_number            = 0;

        this.best_candidate               = null;
        this.second_best_candidate        = null;
        this.population_reached_food      = false;
    };

    display() {
        fill(0);
        text(
            'Current generation: ' + Math.round(this.generation_number),
            this.display_position_x,
            this.display_position_y + this.display_position_increment_y * 0
        );
        text(
            'Current move: ' + Math.round(this.move_number),
            this.display_position_x,
            this.display_position_y + this.display_position_increment_y * 1
        );
        text(
            'Best fitness: ' + Math.round(this.best_candidate.getFitnessScore()),
            this.display_position_x,
            this.display_position_y + this.display_position_increment_y * 2
        );
        text(
            'Second best fitness: ' + Math.round(this.best_candidate.getFitnessScore()),
            this.display_position_x,
            this.display_position_y + this.display_position_increment_y * 3
        );
        text(
            'Population fed: ' + this.population_reached_food,
            this.display_position_x,
            this.display_position_y + this.display_position_increment_y * 4
        );
    };
}

class Candidate extends Genesys {
    constructor(parent_1, parent_2) {
        super();
        this.x = settings.population_starting_position_x;
        this.y = settings.population_starting_position_y;
        this.width = settings.candidate_width;
        this.color = getRandomHexColor();
        this.reached_food = false;
        
        var offset_x = 0;
        var offset_y = 0;
        if (
            parent_1 !== null && parent_1 !== undefined && 
            parent_2 !== null && parent_2 !== undefined
        ) {
            offset_x = randomGaussian((parent_1.offset_x + parent_2.offset_x) / 2);
            offset_y = randomGaussian((parent_1.offset_y + parent_2.offset_y) / 2);
        }
        else {
            var maximum = 0.03;
            var minimum = -0.03;
            offset_x = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            offset_y = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        }
        //Evolutionary traits
        this.offset_x = offset_x
        this.offset_y = offset_y;
    };
  
    display() {
        fill(this.color);
        rect(this.x, this.y, this.width);

        this.displayAttributes();
    };

    displayAttributes() {
        fill(0);
        text(
            Math.round(this.fitness_score),
            this.x ,
            this.y + this.width / 2
        );
    };

    move(x, y) {
        this.x += getRandomMovement() + this.offset_x;
        this.y += getRandomMovement() + this.offset_y;

        this.x = (this.x < 0 ? 0 : this.x);
        this.y = (this.y < 0 ? 0 : this.y);
        this.x = (this.x > getCanvasWidth() ? getCanvasWidth() - this.width : this.x);
        this.y = (this.y > getCanvasHeight() ? getCanvasHeight() - this.width : this.y);

        this.fitness_score = this.getFitnessScore();
    };

    getFitnessScore() {
        return this.getDistanceFromTarget();
    };

    getDistanceFromTarget() {
        return Math.sqrt(
            Math.pow(
                target.getX() - this.x,
                2
            ) +
            Math.pow(
                target.getY() - this.y,
                2
            )
        );
    };
};

let candidates = [];
let target = new Target();
let hud = new Hud();

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas = createCanvas(
        getCanvasWidth(),
        getCanvasHeight()
    );

    drawTarget();
    drawPopulation();
};

//TODO: Implement a process on resizing of the browser window [ARTidas]
/*function windowResized() {
    resizeCanvas(
        window.innerWidth * 0.95,
        window.innerHeight * 0.95
    );
}*/

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    background('#888');

    hud.move_number++;
    if (hud.best_candidate === null || hud.best_candidate === undefined) {
        hud.best_candidate = candidates[1]
    }
    hud.display();

    drawTarget();
    movePopulation();
    sortPopulation();

    if (hud.population_reached_food) {
        noLoop();
    }

    //After no feeding in a few steps, then lets evolve the popultation.
    if (hud.move_number % settings.evolve_after_cycles === 0) {
        evolvePopulation();
    }
};

function drawPopulation() {
    for (let candidate_number = 0; candidate_number < settings.population_size; candidate_number++) {
        candidates[candidate_number] = new Candidate();
        candidates[candidate_number].display();
    };
};

function drawTarget() {
    target.display();
};

function movePopulation() {
    for (candidate_number = 0; candidate_number < settings.population_size; candidate_number++) {
        moveCandidate(candidate_number);
    }
};
function moveCandidate(candidate_number) {
    candidates[candidate_number].move(1, 1);
    candidates[candidate_number].display();

    if (
        candidates[candidate_number].x - settings.target_search_treshold < target.x && 
        candidates[candidate_number].x + settings.target_search_treshold > target.x &&
        candidates[candidate_number].y - settings.target_search_treshold < target.y && 
        candidates[candidate_number].y + settings.target_search_treshold > target.y 
    ) {
        candidates[candidate_number].reached_food = true;
        hud.population_reached_food = true;
    }
};

function sortPopulation() {
    candidates.sort(compareFitness);
};

function evolvePopulation() {
    hud.generation_number++;
    hud.best_candidate = candidates.shift();
    hud.second_best_candidate = candidates.shift();

    candidates = []; //Kill all the Darwinian race loosing candidates
    candidates[0] = hud.best_candidate;
    candidates[0].x = settings.population_starting_position_x;
    candidates[0].y = settings.population_starting_position_y;
    candidates[1] = hud.second_best_candidate;
    candidates[1].x = settings.population_starting_position_x;
    candidates[1].y = settings.population_starting_position_y;
    for (candidate_number = 2; candidate_number < settings.population_size; candidate_number++) {
        candidates[candidate_number] = new Candidate(candidates[0], candidates[1]);
        candidates[candidate_number].display();
    };
};


function getCanvasWidth() {
    return window.innerWidth * 0.95;
};
function getCanvasHeight() {
    return window.innerHeight * 0.95;
};
function getRandomHexColor() {
    return ('#' + getRandomHexNumber() + getRandomHexNumber() + getRandomHexNumber());
};
function getRandomHexNumber() {
    possible_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    return possible_numbers[Math.floor(Math.random() * possible_numbers.length)];
};
function getRandomMovement() {
    var minimum = -1;
    var maximum = +1;
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

function compareFitness(candidate_1, candidate_2) {
    if (candidate_1.getFitnessScore() < candidate_2.getFitnessScore()) {
        return -1;
    }
    if (candidate_1.getFitnessScore() > candidate_2.getFitnessScore()) {
        return 1;
    }

    return 0;
}