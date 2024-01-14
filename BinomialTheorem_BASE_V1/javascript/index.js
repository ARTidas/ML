document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('calculate')
        .addEventListener('click', calculateBinomialExpression);
    
    function calculateBinomialExpression() {
        const x = document.getElementById('input_x').value;
        const y = document.getElementById('input_y').value;
        const n = parseInt(document.getElementById('input_n').value);

        if (n < 0 || !Number.isInteger(n)) {
            document.getElementById('result').innerHTML = 'The value of the exponent must be a positive integer number!'
            document.getElementById('result').innerHTML = '';
            
            return;
        }

        const result = binomialExpansion(x, y, n);

        //console.log(`The expansion of (${x} + ${y})^${n} is:\n${result}`);
        
        document.getElementById('result').innerHTML = `The expansion of (${x} + ${y})^${n} is:`;
        document.getElementById('result').innerHTML += "<br/>";
        document.getElementById('result').innerHTML += `${result}`;

        document.getElementById('result_simplified').innerHTML = `Simplified:`;
        document.getElementById('result_simplified').innerHTML = `${simplifyBinomialExpansion(result)}`;
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
    /*function binomialExpansion(x, y, n) {
        let expansion = "";
    
        for (let k = 0; k <= n; k++) {
            const coefficient = binomialCoefficient(n, k);
            const term = (coefficient !== 1)
                ? `${coefficient} * ${x}^${n - k} * ${y}^${k}`
                : `${x}^${n - k}${(k === 0) ? '' : ` * ${y}^${k}`}`;
    
            expansion += (k === 0) ? term : ` + ${term}`;
        }
    
        return expansion;
    }*/

    /*function simplifyBinomialExpansion(expression) {
        const terms = expression.split(' + ');
    
        const simplified_terms = terms.map(term => {
            const [coefficient, variable_part] = term.split(' * ');
            const [x_power, y_power] = variable_part.split(' ');
    
            const x_part = (x_power === 'x^0') ? '' : (x_power === 'x^1') ? 'x' : `x^${x_power[1]}`;
            const y_part = (y_power === 'y^0') ? '' : (y_power === 'y^1') ? 'y' : `y^${y_power[1]}`;
    
            return `${coefficient === '1' ? '' : coefficient} ${x_part}${(x_part && y_part) ? ' ' : ''}${y_part}`;
        });
    
        return simplified_terms.join(' + ');
    }*/
    function simplifyBinomialExpansion(expression) {
        const terms = expression.split(' + ');
    
        const simplified_terms = terms.map(term => {
            const [coefficient, variable_part] = term.split(' * ');
            const [x_power, y_power] = variable_part.split(' ');
    
            const x_part = (x_power && x_power.length > 2) ? `x^${x_power[1]}` : (x_power === 'x^1') ? 'x' : (x_power === 'x^0') ? '' : x_power;
            const y_part = (y_power && y_power.length > 2) ? `y^${y_power[1]}` : (y_power === 'y^1') ? 'y' : (y_power === 'y^0') ? '' : y_power;
    
            return `${coefficient === '1' ? '' : coefficient} ${x_part}${(x_part && y_part) ? ' ' : ''}${y_part}`;
        });
    
        return simplified_terms.join(' + ');
    }

});

