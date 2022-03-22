/* 获取本地数据 */
var localdata = localStorage.getItem('user') == null ? [] :
JSON.parse(localStorage.getItem(
    'user'));
console.log(localStorage.getItem(
'user'))
show()
/* 显示数据 */
function show() {
var htmlVac = '';
var htmlTest = '';
localdata.forEach((ele, i) => {
    if(ele.type == "Vaccination"){
        htmlVac += `
        <tr>
            <th>${ele.location}</th>
            <th>${ele.address}</th>
            <th>${ele.tel}</th>
            <th>${ele.type}</th>
            <th>${ele.datetime}</th>
        </tr>
        `
    }
    else{
        htmlTest += `
        <tr>
            <th>${ele.location}</th>
            <th>${ele.address}</th>
            <th>${ele.tel}</th>
            <th>${ele.type}</th>
            <th>${ele.datetime}</th>
        </tr>
        `
    }
});
document.getElementById('box1').innerHTML = htmlTest;
document.getElementById('box2').innerHTML += htmlVac;

}
