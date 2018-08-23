function LoadGeography () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('main')[0].innerHTML = this.responseText;
        }
    }
    xhr.open('GET', 'ajax/geo.html', true);
    xhr.send();
}