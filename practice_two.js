document.addEventListener('DOMContentLoaded', function() { // runs everything only when finished loading

    // when form is submitted, fetch name input and display in an alert
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };

    // when <colour> button is submitted, change CSS
    document.querySelector('#red').onclick = function(){
        document.querySelector('#hello').style.color = 'red';
    };

    document.querySelector('#blue').onclick = function(){
        document.querySelector('#hello').style.color = 'blue';
    };

    document.querySelector('#green').onclick = function(){
        document.querySelector('#hello').style.color = 'green';
    };

    document.querySelector('#reset').onclick = function(){
        document.querySelector('#hello').style.color = 'black';
    };

});