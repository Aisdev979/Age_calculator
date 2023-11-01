const birthDay = document.querySelector('#input-day');
const birthMonth = document.querySelector('#input-month');
const birthYear = document.querySelector('#input-year');
const btn = document.querySelector('#Btn');
const yearResult = document.querySelector('#Year');
const monthResult = document.querySelector('#Month');
const dayResult = document.querySelector('#Day');
const dayError = document.querySelector('#day-error');
const monthError = document.querySelector('#month-error');
const yearError = document.querySelector('#year-error');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();



btn.addEventListener("click", () => {
    let numOfDays = currentDay - birthDay.value;
    let numOfMonths = currentMonth - birthMonth.value;
    let numOfYears = currentYear - birthYear.value;

    if(numOfDays <= 0)
        numOfDays += 30;

    if(numOfMonths <= 0)
        numOfMonths += 11;

    if(birthDay.value > 31) {
        dayError.textContent = `Must be a valid day`;
    } else if (birthMonth.value > 12) {
        monthError.textContent = `Must be a vaild month`;
    } else if (birthYear.value > currentYear) {
        yearError.textContent =`Must be in the past`;
    } else {
        dayError.textContent = "";
        monthError.textContent = "";
        yearError.textContent = "";
        yearResult.textContent = `${numOfYears}`;
        monthResult.textContent = `${numOfMonths}`;
        dayResult.textContent = `${numOfDays}`;
    }
})