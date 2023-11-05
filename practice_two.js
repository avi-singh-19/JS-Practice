document.addEventListener('DOMContentLoaded', function() { // runs everything only when finished loading

    // when form is submitted, fetch name input and display in an alert
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };

    // when <colour> button is submitted, change CSS
    document.querySelectorAll('button').forEach(function(button){
        button.onclick = function(){
            document.querySelector('#hello').style.color = button.dataset.colour
        };
    });
});