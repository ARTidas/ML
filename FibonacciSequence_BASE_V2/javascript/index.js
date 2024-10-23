$(document).ready(function() {
    console.log("Starting up engines...");

    let i = 1;
    let interval = setInterval(
        () => {
            if (i > 45) {
                clearInterval(interval);
            }

            $("#fibonacci_sequence").append(
                computeFibonacciSequence(i++) + " "
            );
        },
        250
    );

});

function computeFibonacciSequence(sequence_number) {
    if (sequence_number < 3) {
        return 1;
    }

    return (
        computeFibonacciSequence(sequence_number - 1) +
        computeFibonacciSequence(sequence_number - 2)
    );
} 

