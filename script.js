(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.classList.contains('btn-equal')) {
                console.log("Just execute Equal Button");
                ;
            } else {
                let value = e.target.dataset.num;
                screen.value += value;
            }
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;

        }
    });
    clear.addEventListener('click', function (e) {
        screen.value = "";
    });
})();