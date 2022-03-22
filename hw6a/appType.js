
//get appointment type from html link string
var appointmentType = (window.location.search.substring(1));
document.getElementById("page-name").innerHTML = appointmentType +" Appointment";

//go to page base on location and appointment type
function tsc() {
    var str = './locations.html?TCSHall+type='+appointmentType;
    window.location.href = str;
}

function eg() {
    var str = './locations.html?EastGarage+type='+appointmentType;
    window.location.href = str;
}

function gym() {
    alert("Can't make an appointment");
}

