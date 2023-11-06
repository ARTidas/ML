document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('calculate_cosine_similarity')
        .addEventListener('click', calculateCosineSimilarity);

    function calculateCosineSimilarity() {
        // Read the input
        const input_set_1 = document.getElementById('input_1').value;
        const input_set_2 = document.getElementById('input_2').value;

        // Split the input strings into arrays of words and clean them
        const words_1 = input_set_1.split(' ').map(word => word.trim());
        const words_2 = input_set_2.split(' ').map(word => word.trim());

        // Create a set of unique words from both sets
        const unique_words = new Set([...words_1, ...words_2]);

        // Create vectors for each set, representing word frequency
        const vector_1 = Array.from(unique_words).map(word => words_1.includes(word) ? 1 : 0);
        const vector_2 = Array.from(unique_words).map(word => words_2.includes(word) ? 1 : 0);

        // Calculate the dot product of the two vectors
        const dotProduct = vector_1.reduce((acc, value, index) => acc + value * vector_2[index], 0);

        // Calculate the magnitudes of the vectors
        const magnitude_1 = Math.sqrt(vector_1.reduce((acc, value) => acc + value * value, 0));
        const magnitude_2 = Math.sqrt(vector_2.reduce((acc, value) => acc + value * value, 0));

        // Calculate the cosine similarity
        const similarity = dotProduct / (magnitude_1 * magnitude_2);

        // Update display similarity value
        document.getElementById('cosine_similarity').textContent = similarity.toFixed(3);
    }
});

