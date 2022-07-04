let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // should do with classes.contains('increase')...
    // wasn't sure there was the function but nice
    const classes = e.currentTarget.classList;
    console.log(classes);
    const btnType = classes[1];
    if(btnType == 'increase'){++count;}
    else if(btnType == 'decrease') {--count;}
    else if(btnType == 'reset') {count = 0;}

    // red if negative, green if positive
    if(count > 0){value.style.color = "green";}
    if(count < 0){value.style.color = "red";}
    if(count == 0){value.style.color = "#222";}

    // text content, nice
    value.textContent = count;
    })
});

// So, talking to HTML:
// addEventListener, querySelector and querySelectorAll, textContent
//
// In general pattern that see:
// Query what u need from HTML
// copy it in some const for reference then use variables to work
// add event listeners to buttons and such, use HOF
// assign variables to the references to display result.
