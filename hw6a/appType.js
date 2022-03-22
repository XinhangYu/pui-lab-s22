var appointmentType = (window.location.search.substring(1,));
document.getElementById("page-name").innerHTML = appointmentType +" Appointment";

function tsc() {
    var str = './locations.html?TCSHall+type='+appointmentType;
    window.location.href = str;
}

function eg() {
    var str = './locations.html?EastGarage+type='+appointmentType;
    window.location.href = str;
}

function gym() {
    // window.location.href = './Gym.html'
    alert("Can't make an appointment");
}

