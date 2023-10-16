const context_objects = [
    {
        color: 'red',
        width: 10,
        shape: 'circle'
    },
    {
        color: 'red',
        width: 11,
        shape: 'circle'
    },
    {
        color: 'blue',
        width: 12,
        shape: 'triangle'
    },
    {
        color: 'red',
        width: 11,
        shape: 'triangle'
    },
    {
        color: 'blue',
        width: 9,
        shape: 'rect'
    },
    {
        color: 'yellow',
        width: 9,
        shape: 'rect'
    },
    {
        color: 'green',
        width: 9,
        shape: 'rect'
    },
];

const is_red = (obj) => obj['color'] === 'red';
const is_blue = (obj) => obj['color'] === 'blue';
const is_yellow = (obj) => obj['color'] === 'yellow';
const is_green = (obj) => obj['color'] === 'green';
const is_large = (obj) => obj['width'] > 10;
const is_cirlce = (obj) => obj['shape'] === 'cirlce';
const is_triangle = (obj) => obj['shape'] === 'triangle';
const is_rect = (obj) => obj['shape'] === 'rect';

let node_tree = new Node(
    is_red,
    new Node(
        is_large,
        new Node(
            is_cirlce,
            null,
            new Node(
                is_rect,
                null,
                new Node(
                    is_triangle,
                    null,
                    null
                )
            )
        ),
        null
    ),
    new Node(
        is_blue,
        null, //BLUE
        new Node(
            is_yellow,
            null, //YELLOW
            null //Here should come the green for further testing
        ),
    ),
);