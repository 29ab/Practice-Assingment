let empData = document.getElementById("sortable");

let retrivedData = JSON.parse(localStorage.getItem('sortedList'));

retrivedData.forEach(function (Elements,index) {

    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id",index);
    tableRow.setAttribute("class","dataRow")

    let Name = document.createElement("td");
    Name.innerHTML = Elements.name;
    let Email = document.createElement("td");
    Email.innerHTML = Elements.email;
    let Address = document.createElement("td");
    Address.innerHTML = Elements.address;
    let Designation = document.createElement("td");
    Designation.innerHTML = Elements.roles;

    tableRow.append(Name, Email, Address, Designation);

    empData.append(tableRow);
});


$(function () {
    $("#sortable").sortable({
        stop: function (event, ui) {

            let rowAfterSorted = document.querySelectorAll(".dataRow");

            rowAfterSorted.forEach(function (el,index) {
                let id = el.getAttribute("id");
                let Array = [];
                $("#"+id).each(function(){
                    var currentRow = $(this);
                    let td1 = currentRow.find('td:eq(0)').text();
                    let td2 = currentRow.find('td:eq(1)').text();
                    let td3 = currentRow.find('td:eq(2)').text();
                    let td4 = currentRow.find('td:eq(3)').text();
                    
                    Array.push(td1, td2, td3, td4);

                    retrivedData[index] = {
                        name:Array[0],
                        email:Array[1],
                        address:Array[2],
                        roles:Array[3]
                    }
                })
                
            });

            localStorage.setItem("sortedList", JSON.stringify(retrivedData));
        }
    });
});