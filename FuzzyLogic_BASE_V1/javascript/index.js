document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('calculate')
        .addEventListener('click', runCosineSimilarity);
    document.getElementById('calculate')
        .addEventListener('click', calculateLevenshteinDistance);
    
    runConsoleTestForTruthEvaluation();

    function runCosineSimilarity() {
        const input_set_1 = document.getElementById('input_1').value;
        const input_set_2 = document.getElementById('input_2').value;

        let character_similarity = calculateCosineSimilarity(
            input_set_1.split('').map(string => string.trim()),
            input_set_2.split('').map(string => string.trim())
        );
        let word_similarity = calculateCosineSimilarity(
            input_set_1.split(' ').map(string => string.trim()),
            input_set_2.split(' ').map(string => string.trim())
        );
        let sentence_similarity = calculateCosineSimilarity(
            input_set_1.split('.').map(string => string.trim()),
            input_set_2.split('.').map(string => string.trim())
        );

        document.getElementById('cosine_similarity_characters').textContent = (
            character_similarity.toFixed(2) + ' - (' + 
                (character_similarity.toFixed(2) * 100).toFixed(2) + 
            '%)'
        );
        document.getElementById('cosine_similarity_words').textContent = (
            word_similarity.toFixed(2) + ' - (' + 
                (word_similarity.toFixed(2) * 100).toFixed(2) + 
            '%)'
        );
        document.getElementById('cosine_similarity_sentence').textContent = (
            sentence_similarity.toFixed(2) + ' - (' + 
                (sentence_similarity.toFixed(2) * 100).toFixed(2) + 
            '%)'
        );
    };

    function calculateCosineSimilarity(set_1, set_2) {
        // Create a set of unique words from both sets
        const unique_strings = new Set([...set_1, ...set_2]);

        // Create vectors for each set, representing word frequency
        const vector_1 = Array.from(unique_strings).map(word => set_1.includes(word) ? 1 : 0);
        const vector_2 = Array.from(unique_strings).map(word => set_2.includes(word) ? 1 : 0);

        // Calculate the dot product of the two vectors
        const dot_product = vector_1.reduce((acc, value, index) => acc + value * vector_2[index], 0);

        // Calculate the magnitudes of the vectors
        const magnitude_1 = Math.sqrt(vector_1.reduce((acc, value) => acc + value * value, 0));
        const magnitude_2 = Math.sqrt(vector_2.reduce((acc, value) => acc + value * value, 0));

        // Calculate the cosine similarity
        const similarity = dot_product / (magnitude_1 * magnitude_2);

        return similarity;
    };

    function calculateLevenshteinDistance() {
        // Read the input
        const input_set_1 = document.getElementById('input_1').value;
        const input_set_2 = document.getElementById('input_2').value;

        const len_1 = input_set_1.length;
        const len_2 = input_set_2.length;
    
        // Create a 2D array to store the distances
        const distances = [];
    
        for (let i = 0; i <= len_1; i++) {
            distances[i] = [i];
        }
    
        for (let j = 0; j <= len_2; j++) {
            distances[0][j] = j;
        }
    
        for (let i = 1; i <= len_1; i++) {
            for (let j = 1; j <= len_2; j++) {
                const cost = input_set_1[i - 1] === input_set_2[j - 1] ? 0 : 1;
                distances[i][j] = Math.min(
                    distances[i - 1][j] + 1,       // Deletion
                    distances[i][j - 1] + 1,       // Insertion
                    distances[i - 1][j - 1] + cost // Substitution
                );
            }
        }

        // Update display similarity value
        document.getElementById('levenshtein_distance').textContent = (
            distances[len_1][len_2] + ' - (' + 
                ((distances[len_1][len_2] / input_set_1.length) * 100).toFixed(2) + 
            '%)'
        );
    };

    function runConsoleTestForTruthEvaluation() {
        const set_1 = [
            true,
            false,
        ];
        const set_2 = [
            undefined,
            null,
            'zero',
            'true',
            'false',
            0,
            1,
            true,
            false,
            '0',
            '1',
            'true',
            'false',
        ];
        for (let base of set_1) {
            for (let comparison of set_2) {
                //console.log(JSON.stringify(base), JSON.stringify(comparison), base == comparison);
                console.log(base);
                console.log(comparison);
                console.log(base == comparison);
                console.log('--------------------------------');
            }
        }
    };
});

