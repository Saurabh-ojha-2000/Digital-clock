function clock() {
    let currenttime = new Date();
    let hours = currenttime.getHours();
    let minutes = currenttime.getMinutes();
    let seconds = currenttime.getSeconds();

    let periods = "AM"
    if (hours >= 12) {
        periods = "PM";
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".periods").innerHTML = periods;
    document.querySelector(".seconds").innerHTML = seconds;

}
let digitalclock = setInterval(clock, 1000);

let currentdate=new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let month = months[d.getMonth()];

let day = currentdate.getDate();
let year = currentdate.getFullYear();

document.querySelector(".month").innerHTML = month;
document.querySelector(".day").innerHTML = day;
document.querySelector(".year").innerHTML = year;