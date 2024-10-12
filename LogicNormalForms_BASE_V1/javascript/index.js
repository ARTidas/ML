// Utility to distribute OR over AND for CNF conversion
function distributeOr(clause1, clause2) {
    let result = [];
    for (let term1 of clause1) {
        for (let term2 of clause2) {
            result.push([...term1, ...term2]);
        }
    }
    return result;
}

// Apply De Morgan's laws and negation pushing
function applyDeMorgan(clause) {
    return clause.replace(/\!\(([A-Za-z\s]+)\)/g, (match, inner) => {
        // Split inner clause by OR or AND and negate
        let variables = inner.split(/\s+\|\|\s+|\s+\&\&\s+/);
        let operator = inner.includes('||') ? '&&' : '||';
        return variables.map(v => v.trim()).map(v => `!${v}`).join(` ${operator} `);
    });
}

function convertToCNF() {
    const expr = document.getElementById('expression').value;
    let cnfOutput = [];

    // Split by OR clauses first
    let disjunctiveClauses = expr.split('||').map(clause => clause.trim());

    // Iterate over the clauses
    let cnfClauses = disjunctiveClauses.map(clause => {
        clause = clause.replace(/[()]/g, '').split('&&').map(literal => literal.trim());
        return [clause];  // Wrap in array for distributive handling
    });

    // Now apply the distribution of OR over AND
    let cnf = cnfClauses.reduce((acc, clause) => distributeOr(acc, clause), [[]]);

    // Format and print CNF output
    let formattedCNF = cnf.map(disjunction => `(${disjunction.join(' || ')})`).join(' && ');
    formattedCNF = applyDeMorgan(formattedCNF);  // Apply De Morgan’s laws for any negations

    document.getElementById('cnfOutput').innerText = formattedCNF;
}