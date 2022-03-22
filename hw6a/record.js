/* 获取本地数据 */
var localdata = localStorage.getItem('user') == null ? [] :
JSON.parse(localStorage.getItem(
    'user'));
console.log(localStorage.getItem(
'user'))
show()
/* 显示数据 */
function show() {
var html = '';
localdata.forEach((ele, i) => {
    html += `
        <tr>
            <th>${ele.location}</th>
            <th>${ele.address}</th>
            <th>${ele.tel}</th>
            <th>${ele.type}</th>
            <th>${ele.datetime}</th>
        </tr>
        `
});
document.querySelector('tbody').innerHTML = html

}
