function LoadForm (str) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('main')[0].innerHTML = this.responseText;
        }
    }
    xhr.open('GET', 'ajax/form.html', true);
    xhr.send();

    $(document).on('click', 'button', function(event) { LoadQuiz(str); })
}

function LoadQuiz (str) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('main')[0].innerHTML = this.responseText;
        }
    }

    switch (str) {
        case 'geo':
            var file = 'ajax/geo.html';
        case 'psy':
            var file = 'ajax/psy.html';
        case 'game':
            var file = 'ajax/game.html';
    }

    xhr.open('GET', file, true);
    xhr.send();
}