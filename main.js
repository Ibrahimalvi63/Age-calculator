const inputDate = document.querySelector(".input-date");
const calcBtn = document.querySelector("#btn");
let age = document.querySelector("#age");

inputDate.max = new Date().toISOString().split("T")[0];

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  let recentDate = new Date();
  let recentYear = recentDate.getFullYear();
  let recentMonth = recentDate.getMonth() + 1;
  let recentDay = recentDate.getDate();

  let birthDate = new Date(inputDate.value);
  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth() + 1;
  let birthDay = birthDate.getDate();

  let ageYear, ageMonth, ageDay;
  ageYear = recentYear - birthYear;
  ageMonth = recentMonth - birthMonth;
  if (birthMonth > recentMonth) {
    ageMonth = recentMonth + 12 - birthMonth;
    ageYear--;
  }
  ageDay = recentDay - birthDay;
  if (birthDay > recentDay) {
    ageDay = recentDay + getDaysInMonth(birthYear, birthMonth) - birthDay;
    ageMonth--;
  }

  if (!inputDate.value) {
    age.style.color = "red";
    age.innerHTML =
      "<strong>AGE:</strong><br />Please enter your date of birth";
    return;
  }

  age.style.color = "black";
  age.innerHTML = `<strong>AGE:</strong><br />Your are ${ageYear} year, ${ageMonth} month and ${ageDay} day old.`;
}

calcBtn.addEventListener("click", calculateAge);
