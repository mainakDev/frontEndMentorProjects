const day = document.querySelector('.input-day');
const month = document.querySelector('.input-month');
const year = document.querySelector('.input-year');
const submitButton = document.querySelector('.submit-Button');
const displayAge = document.querySelector('.display-age');
let dateString = '';
let currentDate = new Date();

todayDate = (currentDate.getFullYear()).toString()+'-'+(currentDate.getMonth()+1).toString()+'-'+currentDate.getDate().toString();
submitButton.addEventListener('click', () => {
    dateString = year.value+'-'+month.value+'-'+day.value;
    calculateDifferenceInDates(dateString, todayDate);
});

const calculateDifferenceInDates = (dateString, todayDate) => {
    console.log(dateString);
    console.log(todayDate);
    const dob = new Date(dateString);
    const curDate = new Date(todayDate);

    const timeDifference = curDate.getTime() - dob.getTime();

    const age = Math.abs(timeDifference / (1000 * 3600 * 24));

    console.log(`The age is ${age}, ${age%30}`);

    displayAgeFunction(age)
}

const displayAgeFunction = (age) => {
    const ageDisplay = document.createElement('h1');
    ageDisplay.textContent = age+' years old';
    displayAge.appendChild(ageDisplay);
}




