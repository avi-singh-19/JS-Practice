function showAlert() {
    alert('Hello there');

    const heading = document.querySelector('h1');

    if (heading.innerHTML === 'Hello'){
        heading.innerHTML = 'You have clicked the message button';
    } else{
        heading.innerHTML = 'You have clicked the message button again';
    }
}

let count = 0;
function Counter(){
    count++;
    document.querySelector('h2').innerHTML = count;

    if (count % 10 === 0){
        alert(`Count is now ${count}`)
    }
}