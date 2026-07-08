const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//1. Write a FOR loop that will iterate through the STUDENT-REPORT
//  array and print to the console the current array value if it is below 30
for (let i = 0; i < studentReport.length; i++) if (studentReport[i] < LIMIT) {

    console.log(studentReport[i]);
}

//2.Repeat the previous programming snippet by using a while loop.
let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) { console.log(studentReport); }
    i++;
}
//3. Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function (student) {
    if (student < 30) { console.log(student); }
});

//4. Repeat the previous programming snippet by using a for..in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

}
//5. Use any type of loop to dynamically produce the day names
// (Monday, Tuesday, Wednesday, etc.) for the next DAYS starting today

const options = { weekday: "long" };
//begin
const today = new Date();

// TODAY test output 

let todayString = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todayString}</strong>`;
// next n days

for (let i = 1; i <= DAYS; i++) {
    const nextDay = new Date();
    nextDay.setData(today.getDate() + 1);
    let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);
    const item = document.createElement("li");//list item
    item.textContext = nextDayString;
    document.querySelector("ul").appendChild(item)
}



