function LoadForm (str) {
    // Basic AJAX request (not using jQuery)
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('main')[0].innerHTML = this.responseText;
        }
    }
    xhr.open('GET', 'ajax/form.html', true);
    xhr.send();

    // Here's an example of using SessionStorage
    $(document).on('click', 'button', function(event) {
        sessionStorage.setItem('name', document.getElementById('fName').value);
        sessionStorage.setItem('surname', document.getElementById('lName').value);
        LoadQuiz(str);
    })
}

function LoadQuiz (str) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('main')[0].innerHTML = this.responseText;
        }
    }

    // This is for picking the correct file to load
    switch (str) {
        case 'geo':
            var file = 'ajax/geo.html';
            break;
        case 'psy':
            var file = 'ajax/psy.html';
            break;
        case 'game':
            var file = 'ajax/game.html';
    }

    xhr.open('GET', file, true);
    xhr.send();
}

// If you click a radio button, this happens
$(document).on('click', 'input[type=radio]', 
    function(event) {
        // All the correct answers are stored here
        var correctValues = ['kat', 'treble', 'sh'];

        function CheckResult(event, answer) { 
            return (correctValues.indexOf(answer) != -1) ? true : false;
        }

        if (CheckResult(event, $(this).val())) {
            var main = document.getElementsByTagName('main')[0];
            main.innerHTML = ''; // Clear the main element

            // Here's how to add elements the harder way (but it's still good to know)
            // It's easier with innerHTML in this case
            var linkHome = document.createElement('a');
            var linkText = document.createTextNode('Click here to go back to the home page.');
            linkHome.href = '../index.html';
            linkHome.appendChild(linkText);
            main.appendChild(linkHome);

            var congrPar = document.createElement('p');
            var txtPar = document.createTextNode('Congratulations, ' + sessionStorage.getItem('name') + ' ' +
            sessionStorage.getItem('surname') + ', you got the answer right.');
            congrPar.appendChild(txtPar);
            main.insertBefore(congrPar, linkHome);
        }

        else { alert('Try again.'); }
    }
);