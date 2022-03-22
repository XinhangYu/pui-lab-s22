
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
                <th><a href='javascript:;' onclick='cancel(${i})'>cancel</a></th>
            </tr>
            `
    });
    document.querySelector('tbody').innerHTML = html

}
/* 删除数据 */
function cancel(i) {
    localdata.splice(i, 1)
    localStorage.setItem('user', JSON.stringify(localdata));
    show()
}
