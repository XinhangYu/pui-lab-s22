/* 获取本地数据 */
var arr = JSON.parse(localStorage.getItem('user'))
var len = arr.length;
var lastData = arr[len-1];
show();
/* 显示数据 */
function show() {
    var html = '';
    
    html += lastData.type;
    html += " appointment at ";
    html += lastData.location;
    html += " has been created";
    document.querySelector('h2').innerHTML += html;
}