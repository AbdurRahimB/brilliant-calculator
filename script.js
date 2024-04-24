(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    // Variable to track the type of the last button pressed
    let lastButtonType = null;

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;

            // clear the screen if the last button pressed was an operator or equal sign
            if (lastButtonType === 'operator' || lastButtonType === 'equal') {
                screen.value = '';
            }

            // update lastButtonType based on the last pressed button
            if (e.target.classList.contains('btn-equal')) {
                console.log("Just execute Equal Button");
                lastButtonType = 'equal';
            } else if (value) {
                // If the last character is an operator and the current button is an operator, replace the last character
                if (['+', '-', '*', '/'].includes(screen.value.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
                    screen.value = screen.value.slice(0, -1) + value;
                } else {
                    screen.value += value;
                }
                lastButtonType = 'number';
            } else {
                lastButtonType = 'operator';
            }
        });
    });

    // display the result on the screen
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
            lastButtonType = 'equal';
        }
    });
    // event listener for the clear button
    clear.addEventListener('click', function (e) {
        screen.value = "";
        lastButtonType = null;
    });
})();
