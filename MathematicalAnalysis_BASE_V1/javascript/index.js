document.addEventListener("DOMContentLoaded", function(event) {

    const editor = document.getElementById('editor');
    const output_container = document.getElementById('output-container');

    editor.addEventListener('input', updateOutput);

    function updateOutput() {
        renderLatex(editor.value);
    }

    function renderLatex(latex_code) {
        output_container.innerHTML = '';

        // Render the LaTeX code using KaTeX
        try {
            katex.render(latex_code, output_container, {
                throwOnError: false, // Do not throw errors on invalid LaTeX
            });
        }
        catch (error) {
            output_container.innerHTML = '<p>Error rendering LaTeX code</p>';
        }
    }

});