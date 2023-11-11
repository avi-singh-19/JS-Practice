function showAlert() {
    alert('Hello there');

    const heading = document.querySelector('h1');

    if (heading.innerHTML === 'Hello'){
        heading.innerHTML = 'You have clicked the message button';
    } else{
        heading.innerHTML = 'You have clicked the message button again';
    }
}

if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function Counter(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h2').innerHTML = counter;
    localStorage.setItem('counter', counter);

    if (counter % 10 === 0){
        alert(`Count is now ${counter}`)
    }
}