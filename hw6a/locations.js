//get appointment type and location from html link string
var TypeLoc = (window.location.search.substring(1,));
var plus = TypeLoc.indexOf('+type=');
var loc = TypeLoc.substring(0,plus);
var type = TypeLoc.substring(plus+6);

//update header of the page dynamically based on previous selections
document.getElementById("page-name").innerHTML = "New "+ type + " Appointment @" + loc.toUpperCase();

//get date and time
var date_now = new Date();
var year = date_now.getFullYear();
var month = date_now.getMonth() + 1 < 10 ? "0" + (date_now.getMonth() + 1) : (date_now.getMonth() +
    1);
var date = date_now.getDate() < 10 ? "0" + date_now.getDate() : date_now.getDate(); 
document.querySelector('#birthday').getAttribute('min', year + "-" + month + "-" + date);

//with submit, store information into local storage
document.querySelector('#submit').addEventListener('click', function () {
    var address = document.querySelector('.Address span').innerHTML; 
    var tel = document.querySelector('.Tel span').innerHTML; 
    var myselect = document.getElementById("test"); 
    var index = myselect.selectedIndex;
    
    var datetime = document.getElementById("birthday").value; 
    
    //cannot proceed without selecting date
    if (datetime == '') {
        alert('Please complete the contents');
        return false;
    }

    //cannot proceed with selecting date in the past
    if (new Date().getTime() > new Date(datetime).getTime()) {
        alert('Please select future time');
        return false;
    }
    
    //update local storage
    var localdata = localStorage.getItem('user') == null ? [] : JSON.parse(localStorage.getItem('user'));
    var savedata = {
        'location': loc,
        'address': address,
        'tel': tel,
        'type': type,
        'datetime': datetime
    }
    var user = [...localdata, savedata] 
    localStorage.setItem('user', JSON.stringify(user));
    
    //jump to successful appointment page directly 
    window.location.href = './success.html';
})
