console.log('Starting up engines...');
window.addEventListener("DOMContentLoaded", function() {
    console.log('Document loaded...');
    document.getElementById("the_date").innerHTML = new Date().toJSON().slice(0, 10);
});