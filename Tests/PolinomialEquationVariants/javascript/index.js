document.addEventListener("DOMContentLoaded", function(event) {

    const output_container = document.getElementById('output');
    let counter = 0;

    run();

    // Cartesian products of several sets
    // https://en.wikipedia.org/wiki/Cartesian_product
    function run() {
        //+- a x^n +- b x +- c
        const signum_values = ['', '+', '-'];
        const operation_values = ['+', '-']; // TODO: Add multiplication * and division /
        const a_values = ['0', '1', '1.1', '2', '3', '1.23', '12.3', '123'];
        const n_values = ['0', '1', '1.1', '2', '3', '4.56', '45.6', '456'];
        const b_values = ['0', '1', '1.1', '2', '3', '7.89', '78.9', '789'];
        const c_values = ['0', '1', '1.1', '2', '3', '2.46', '24.6', '246'];

        /*output_container.innerHTML += '//---ax^n--------------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < a_values.length; j++) {
                for (let k = 0; k < n_values.length; k++) {
                    output_container.innerHTML += (
                        (++counter + '.: ') + 
                        (signum_values[i] + a_values[j] + 'x^{' + n_values[k] + '}' + "<br/>")
                    );
                }
            }
        }

        output_container.innerHTML += '//---bx---------------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < b_values.length; j++) {
                output_container.innerHTML += (
                    (++counter + '.: ') + 
                    (signum_values[i] + b_values[j] + 'x' + "<br/>")
                );
            }
        }

        output_container.innerHTML += '//---c----------------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < c_values.length; j++) {
                output_container.innerHTML += (
                    (++counter + '.: ') + 
                    (signum_values[i] + c_values[j] + "<br/>")
                );
            }
        }

        output_container.innerHTML += '//---ax^n+-bx---------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < a_values.length; j++) {
                for (let k = 0; k < n_values.length; k++) {
                    for (let l = 0; l < operation_values.length; l++) {
                        for (let m = 0; m < signum_values.length; m++) {
                            for (let n = 0; n < b_values.length; n++) {
                                output_container.innerHTML += (
                                    (++counter + '.: ') + 
                                    (signum_values[i] + a_values[j] + 'x^{' + n_values[k] + '}') +
                                    (operation_values[l]) +
                                    (signum_values[m] + b_values[n] + 'x' + "<br/>")
                                );
                            }
                        }
                    }
                }
            }
        }

        output_container.innerHTML += '//---ax^n+-c----------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < a_values.length; j++) {
                for (let k = 0; k < n_values.length; k++) {
                    for (let l = 0; l < operation_values.length; l++) {
                        for (let m = 0; m < signum_values.length; m++) {
                            for (let n = 0; n < c_values.length; n++) {
                                output_container.innerHTML += (
                                    (++counter + '.: ') + 
                                    (signum_values[i] + a_values[j] + 'x^{' + n_values[k] + '}') +
                                    (operation_values[l]) +
                                    (signum_values[m] + c_values[n] + "<br/>")
                                );
                            }
                        }
                    }
                }
            }
        }

        output_container.innerHTML += '//---bx+-c------------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < b_values.length; j++) {
                for (let k = 0; k < operation_values.length; k++) {
                    for (let l = 0; l < signum_values.length; l++) {
                        for (let m = 0; m < c_values.length; m++) {
                            output_container.innerHTML += (
                                (++counter + '.: ') + 
                                (signum_values[i] + b_values[j] + 'x') + 
                                (operation_values[k]) +
                                (signum_values[l] + c_values[m] + "<br/>")
                            );
                        }
                    }
                }
            }
        }*/

        /*output_container.innerHTML += '//---ax^n+-bx+-c------------------------------------------------------------------<br/>'
        for (let i = 0; i < signum_values.length; i++) {
            for (let j = 0; j < a_values.length; j++) {
                for (let k = 0; k < n_values.length; k++) {
                    for (let l = 0; l < operation_values.length; l++) {
                        for (let m = 0; m < signum_values.length; m++) {
                            for (let n = 0; n < b_values.length; n++) {
                                for (let o = 0; o < operation_values.length; o++) {
                                    for (let p = 0; p < signum_values.length; p++) {
                                        for (let q = 0; q < c_values.length; q++) {
                                            output_container.innerHTML += (
                                                (++counter + '.: ') + 
                                                (signum_values[i] + a_values[j] + 'x^{' + n_values[k] + '}') +
                                                (operation_values[l]) +
                                                (signum_values[m] + b_values[n] + 'x') +
                                                (operation_values[o]) +
                                                (signum_values[p] + c_values[q]) +
                                                ("<br/>")
                                            );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }*/
        
    }

});