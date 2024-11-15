const inputDate = document.querySelector(".input-date");
const calcBtn = document.querySelector("#btn");
let age = document.querySelector("#age");

inputDate.max = new Date().toISOString().split("T")[0];

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  const recentDate = new Date();
  const recentYear = recentDate.getFullYear();
  const recentMonth = recentDate.getMonth() + 1;
  const recentDay = recentDate.getDate();

  const birthDate = new Date(inputDate.value);
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

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
