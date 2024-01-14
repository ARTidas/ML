document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('calculate')
        .addEventListener('click', calculateBinomialExpression);
    
    function calculateBinomialExpression() {
        const x = document.getElementById('input_x').value;
        const y = document.getElementById('input_y').value;
        const n = parseInt(document.getElementById('input_n').value);

        if (n < 0 || !Number.isInteger(n)) {
            document.getElementById('result').innerHTML = 'The value of the exponent must be a positive integer number!'
            
            return;
        }

        const result = binomialExpansion(x, y, n);

        console.log(`The expansion of (${x} + ${y})^${n} is:\n${result}`);
        document.getElementById('result').innerHTML = `The expansion of (${x} + ${y})^${n} is:\n${result}`;
    }

    // Function to calculate the binomial coefficient
    function binomialCoefficient(n, k) {
        if (k === 0 || k === n) {
            return 1;
        }
        else {
            return (
                binomialCoefficient(n - 1, k - 1) + 
                binomialCoefficient(n - 1, k)
            );
        }
    }

    // Function to expand a binomial expression
    function binomialExpansion(x, y, n) {
        let expansion = "";

        for (let k = 0; k <= n; k++) {
            const coefficient = binomialCoefficient(n, k);
            const term = `${coefficient} * ${x}^${n - k} * ${y}^${k}`;
            expansion += (k === 0) ? term : ` + ${term}`;
        }

        return expansion;
    }

});

