let corranswer=101;
let seleanswer;


let previousContainer;

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function changeColor(container) {
    if (previousContainer) {
        previousContainer.style.backgroundColor = '#FFC0CB';
    }

    container.style.backgroundColor = '#008000';

    previousContainer = container;
}


function createContainer() {
    const container = document.createElement('div');
    container.className = 'container';
    let x = getRandomNumber();
    container.innerText = x;
    if(x < corranswer){
        corranswer= x;
    }
    container.style.backgroundColor = '#FFC0CB';

    container.addEventListener('click', function () {
        changeColor(container);
        seleanswer = container.innerText;
    });

    return container;
}

function createContainers() {
    const containerWrapper = document.getElementById('container-wrapper');
    for (let i = 0; i < 8; i++) {
        const container = createContainer();
        containerWrapper.appendChild(container);
        console.log(corranswer);
    }
}

var dataReceived = decodeURIComponent(window.location.search.replace(/^.*?\=/, ''));

let s = 0;
function tot2() {

    if (seleanswer==corranswer) {
        s = 1;
        // alert('Hurrey! your answer is correct.');
    } else {
        s=0;
        // alert('Your answer is wrong, but keep learning.');
    }
    window.location.href = 'p3.html?data1=' + encodeURIComponent(dataReceived) + '&data2=' + encodeURIComponent(s);
}

window.onload = createContainers;