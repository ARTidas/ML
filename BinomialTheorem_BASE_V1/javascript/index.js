document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('calculate')
        .addEventListener('click', calculateBinomialExpression);
    
    function calculateBinomialExpression() {
        const x = document.getElementById('input_x').value;
        const y = document.getElementById('input_y').value;
        const n = parseInt(document.getElementById('input_n').value);

        if (n < 0 || !Number.isInteger(n)) {
            document.getElementById('result').innerHTML = 'The value of the power (exponent) must be a positive integer number!'
            document.getElementById('result').innerHTML = '';
            
            return;
        }

        let result = binomialExpansion(x, y, n);
        document.getElementById('result').innerHTML = `The expansion of (${x} + ${y})^${n} is:`;
        document.getElementById('result').innerHTML += "<br/>";
        document.getElementById('result').innerHTML += `${result}`;

        result = simplifyPower(result);
        document.getElementById('result_power_simplified').innerHTML = `Simplifying the power functions:`;
        document.getElementById('result_power_simplified').innerHTML += "<br/>"
        document.getElementById('result_power_simplified').innerHTML += `${result}`;

        result = simplifyMultiplication(result);
        document.getElementById('result_mulitplication_simplified').innerHTML = `Simplifying the multiplications:`;
        document.getElementById('result_mulitplication_simplified').innerHTML += "<br/>"
        document.getElementById('result_mulitplication_simplified').innerHTML += `${result}`;
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

    function simplifyBinomialExpansion(expanded_expression) {
        return (
            simplifyMultiplication(
                simplifyPower(
                    expanded_expression
                )
            )
        );
    }

    function simplifyPower(expanded_expression) {
        return (
            expanded_expression
                .replace(/([^ ]+\^0)/gm, '1')
                .replaceAll('^1 ', ' ')
                .replaceAll('  ', ' ')
                .trim()
        );
    }

    function simplifyMultiplication(expanded_expression) {
        return (
            expanded_expression
                .replace(/^1 \* /gm, '')
                .replace(/\* 1 | 1 \*/gm, '')
                .replaceAll('  ', ' ')
                .trim()
        );
    }
    

});

