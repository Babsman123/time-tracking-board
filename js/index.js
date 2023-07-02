const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

let boxContent;
daily.addEventListener("click", getDailyReport);
weekly.addEventListener("click", getWeeklyReport);
monthly.addEventListener("click", getMonthlyReport);
