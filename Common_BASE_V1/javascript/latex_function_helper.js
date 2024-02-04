class LatexFunctionHelper {

    static latexCodeToFunction(latex_code) {
        try {
            // Extract the variable from LaTeX code (assuming a single variable)
            const input_variable = 'x';
            // If multiple variable may be required, I found an idea on StackOverflow:
            // https://stackoverflow.com/questions/4183591/new-function-with-variable-parameters

            const js_expression = (
                latex_code
                    .replace(/^f\(\s*x\s*\)\s*=\s*/, '') // Remove the 'f(x) = ' from the beginning of the input
                    .replace(new RegExp(`\\b${input_variable}\\b`, 'g'), 'x')
                    .replace(/(\d)x/g, '$1*x')  // Add a * between a number and a variable
                    .replace(/\^/g, '**')
            );

            return new Function([input_variable, 'scale'], `return ${js_expression};`);
        }
        catch (Exception) {
            console.error('Error converting LaTeX code to JavaScript function:', Exception);

            return (Exception instanceof SyntaxError)
                ? `Error: Invalid LaTeX code - ${Exception.message}`
                : 'Error converting LaTeX code to JavaScript function.';
        }
    }

    static latexCodeToFunctionWithScale(latex_code) {
        try {
            const input_variable = 'x';
            const scale_variable = 'canvas_scale';

            // Remove 'f(x) = ' from the beginning of the LaTeX code
            latex_code = latex_code.replace(/^f\(\s*x\s*\)\s*=\s*/, '');

            // Split the LaTeX code into terms
            const terms = latex_code.split(/\s*([\+\-])\s*/).filter(Boolean);

            // Create the JavaScript expression for each term
            const js_expression = terms.map(term => {
                //if (term.match(/x\^{([0-9.\/]+)}/g)) {
                if (term.match(new RegExp(`${input_variable}\\^{([0-9.]+)}`))) {
                    // Handle specific case like x^{0.5}
                    return term.replace(new RegExp(`${input_variable}\\^{([0-9.]+)}`), `(Math.pow(${input_variable}, $1) / (Math.pow(${scale_variable}, ($1 - 1))))`);
                }
                else if (term.includes(input_variable + '^')) {
                    // Handle terms with x^2, x^3, etc.
                    return term.replace(new RegExp(`${input_variable}\\^([0-9.]+)`), `(Math.pow(${input_variable}, $1) / (Math.pow(${scale_variable}, ($1 - 1))))`);
                }
                else if (term.includes(input_variable)) {
                    // Handle terms with x
                    return term.replace(new RegExp(`([0-9.]+)${input_variable}`), `($1 * ${input_variable} * ${scale_variable})`);
                }
                else if (term.match(/([0-9.]+)/g)) {
                    // Handle constant terms (including decimals)
                    return term.replace(new RegExp(`([0-9.]+)`), `($1 * ${scale_variable})`);
                }
                else {
                    // Handle constant terms without numeric value (e.g., 'pi')
                    return term;
                }
            }).join('');

            console.log(js_expression);

            return new Function(
                [
                    input_variable,
                    scale_variable
                ],
                `return ${js_expression};`
            );
        }
        catch (error) {
            console.error('Error converting LaTeX code to JavaScript function:', error);

            return (error instanceof SyntaxError)
                ? `Error: Invalid LaTeX code - ${error.message}`
                : 'Error converting LaTeX code to JavaScript function.';
        }
    }

}