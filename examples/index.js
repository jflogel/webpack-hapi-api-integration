import {hello} from './../index';

function component () {
    hello().then((msg) => {
        var element = document.createElement('div');
        element.innerHTML = msg;
        document.body.appendChild(element);
    });
}

component();