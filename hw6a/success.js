// read local storage
var arr = JSON.parse(localStorage.getItem('user'))
var len = arr.length;
var lastData = arr[len-1];

// show data in local storage
show();
function show() {
    var html = '';
    
    html += (lastData.type).toLowerCase() ;
    html += " appointment on ";
    html += lastData.datetime;
    html += " at ";
    html += lastData.location;
    html += " has been created";
    document.querySelector('h2').innerHTML += html;
}