var appointmentType = (window.location.search.substring(1,));
document.getElementById("page-name").innerHTML = appointmentType +" Appointment";

function tsc() {
    window.location.href = './TCS.html?type='+appointmentType;
}

function eg() {
    window.location.href = './EG.html?type=Vaccination'+appointmentType;
}

function gym() {
    // window.location.href = './Gym.html'
    alert("Can't make an appointment");
}

