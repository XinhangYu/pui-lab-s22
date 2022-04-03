//get local data
var localdata = localStorage.getItem('user') == null ? [] :
JSON.parse(localStorage.getItem('user'));

// show local data with formatting
show()
function show() {
    var htmlVac = '';
    var htmlTest = '';
    // loop through each object in the local data array
    // and display in the corresponding table (test or vaccination)
    localdata.forEach((ele, i) => {
        if(ele.type == "Vaccination"){
            htmlVac += `
            <tr>
                <th>${ele.location}</th>
                <th>${ele.address}</th>
                <th>${ele.tel}</th>
                <th>${ele.type}</th>
                <th>${ele.datetime}</th>
                <th>${ele.time}</th>
            </tr>
            `
        }
        else if (ele.type == "Testing"){
            htmlTest += `
            <tr>
                <th>${ele.location}</th>
                <th>${ele.address}</th>
                <th>${ele.tel}</th>
                <th>${ele.type}</th>
                <th>${ele.datetime}</th>
                <th>${ele.time}</th>
            </tr>
            `
        }
});
    document.getElementById('box1').innerHTML = htmlVac;
    document.getElementById('box2').innerHTML = htmlTest;
}
