
//得到当前时间
var date_now = new Date();
//得到当前年份
var year = date_now.getFullYear();
//得到当前月份
//注：
// 1：js中获取Date中的month时，会比当前月份少一个月，所以这里需要先加一
// 2: 判断当前月份是否小于10，如果小于，那么就在月份的前面加一个 '0' ， 如果大于，就显示当前月份
var month = date_now.getMonth() + 1 < 10 ? "0" + (date_now.getMonth() + 1) : (date_now.getMonth() +
    1); //得到当前日子（多少号） 
var date = date_now.getDate() < 10 ? "0" + date_now.getDate() : date_now.getDate(); //设置input标签的max属性
document.querySelector('#birthday').getAttribute('min', year + "-" + month + "-" + date) /* 设定最小日期 */

document.querySelector('#submit').addEventListener('click', function () {
    var address = document.querySelector('.Address span').innerHTML; /* 地址 */
    var tel = document.querySelector('.Tel span').innerHTML; /* 电话 */
    var myselect = document.getElementById("test"); /* 类型 */
    var index = myselect.selectedIndex;
    var type = myselect.options[index].value;
    var datetime = document.getElementById("birthday").value; /* 日期 */
    if (datetime == '') {
        alert('Please complete the contents')
        return false;
    }
    /* 获得本地存储数据 */
    var localdata = localStorage.getItem('user') == null ? [] : JSON.parse(localStorage.getItem('user'))
    /* 组装存储的数据 */
    var savedata = {
        'address': address,
        'tel': tel,
        'type': type,
        'datetime': datetime
    }
    
    var user = [...localdata, savedata] /* 形成数组 */
    /* 存储数据到本地 */
    localStorage.setItem('user', JSON.stringify(user));
    console.log("here")
    console.log(localStorage)
    //alert('success');
    /* 跳转记录页面 */
    window.location.href = './success.html'
})
