const age = function () {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let todaysDate = new Date();
  let date2 = todaysDate.getDate();
  let month2 = 1 + todaysDate.getMonth();
  let year2 = todaysDate.getFullYear();

  if (date > date2 && date <= 31) {
    date2 = date2 + monthDays[month2 - 1];
    console.log(date2);
    month2 = month2 - 1;
    console.log(month2);
  }
  if (month > month2 && month <= 12) {
    month2 = month2 + 12;
    year2 = year2 - 1;
  }
  if (date > 31) {
    alert("please enter valid date ");
    return location.reload();
  }
  if (month > 12) {
    alert("please enter the valid month ");
    return location.reload();
  }

  let day = date2 - date;
  let diffMonth = month2 - month;
  let DiffYear = year2 - year;
  document.getElementById(
    "age"
  ).innerHTML = `hey ${name} you are ${DiffYear}years ${diffMonth}months and ${day}days old `;
};
