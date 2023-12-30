document.addEventListener('DOMContentLoaded', function(event) {

    const limit_number = 1000;
    const prime_sieve = document.getElementById('prime_sieve');

    populatePrimeTable();

    function populatePrimeTable() {
        for (let i = 1; i <= limit_number; i++) {
            const number_box = createElement('span', {
                id: 'number_box_' + i,
                class: 'number_box',
                innerText: i
            });
            number_box.addEventListener('click', runSieve);
            prime_sieve.appendChild(number_box);

            if (i % 10 === 0) {
                prime_sieve.appendChild(
                    createElement('br')
                )
            }
        }
    };

    function createElement(tag_name, attributes) {
        const element = document.createElement(tag_name);
    
        if (attributes) {
            for (const key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    element[key] = attributes[key];
                }
            }
        }
    
        return element;
    }

    function runSieve() {
        const selected_number = parseInt(this.innerText);
        console.log('Clicked on number:', selected_number);

        for (let i = (selected_number * selected_number); i <= limit_number; i += selected_number) {
            console.log(i);
            document.getElementById('number_box_' + i).style.backgroundColor = '#f00';
        }
    }

});

