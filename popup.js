var data = {
    "Day": "05 / 20 / 2014",
    "Quarter": "Q3",
    "StudentCount": 3,
    "Students": [
        {
            "ID": "677887",
            "ClassNumber": "",
            "Code": "AAN1782-2",
            "FirstName": "Jason",
            "LastName": "Aanerud",
            "NickName": ""
        },
        {
            "ID": "387701",
            "ClassNumber": "",
            "Code": "ABE1571-2",
            "FirstName": "Saraç Hailey",
            "LastName": "Abella",
            "NickName": "Hailey"
        },
        {
            "ID": "692503",
            "ClassNumber": "",
            "Code": "ACT1828-1",
            "FirstName": "Little",
            "LastName": "Account",
            "NickName": ""
        }
    ],
    "Already": "0",
    "AttendanceResults": null
};    


window.addEventListener("load", refreshData);

function loadAttendance() {
    $( "#kitties" ).empty();
    for (i=0; i < data["Students"].length; i++) {
        //console.log(i);
        $( "#kitties" ).append( "<li class='class' id='" + i + "'>" + data["Students"][i].FirstName + " "  + data["Students"][i].LastName + "<select class='presence'><option class='present' value='0'>Present</option><option class='tardy' value='1'>Tardy</option><option class='absent' value='2'>Absent</option></select></br><input type='text' placeholder='Enter Comments Here'></input></li>" );
    };     
    $(".presence").change(function() {
        console.log(".presence changed");

        var x;
        for (i=0; i < data["Students"].length; i++){
            console.log(i);
            //value of the select within id: i
            x = document.getElementById(i).getElementsByTagName('select')[0].value;
            console.log(x);
            localStorage.setItem("dropDown" + i, x);
        };
        //save date of last change for submit
    });
    $("input").change(function() {
        console.log("input changed");

        var x;
        for (i=0; i < data["Students"].length; i++){
            console.log(i);
            c = document.getElementById(i).getElementsByTagName('input')[0].value;
            console.log(c);
            localStorage.setItem("comment" + i, c);
        };
        //save date of last change for submit
    });

    $( "#submit" ).click(function() {
        console.log("bob");
        var theMagicalValueOfEpicness = {
            //"Date":,
            "Students":{}
        };
        for (i=0; i < data["Students"].length; i++){
            var x = localStorage.getItem("dropDown" + i);
            if(x == 0){
                alert("Narwhals");
                theMagicalValueOfEpicness["Students"][data["Students"][i]["ID"]]={"Present": 1, "Absent": 0, "Tardy": 0, "Comment": localStorage.getItem("comment" + i)};
            }else if(x == 1){
                theMagicalValueOfEpicness["Students"][data["Students"][i]["ID"]]={"Present": 1, "Absent": 0, "Tardy": 1, "Comment": localStorage.getItem("comment" + i)};
            }else if(x == 2){
                theMagicalValueOfEpicness["Students"][data["Students"][i]["ID"]]={"Present": 0, "Absent": 1, "Tardy": 0, "Comment": localStorage.getItem("comment" + i)};
            }
        };
        console.log(theMagicalValueOfEpicness);
        console.log(theMagicalValueOfEpicness.Students);
        alert(theMagicalValueOfEpicness);
        //send to API

        // Put the object into storage
        localStorage.setItem('theMagicalValueOfEpicness', JSON.stringify(theMagicalValueOfEpicness));
    });
};


function refreshData() {
    //runs function that gets assignments
    loadAttendance();
};

//check and notify for new data
$(document).ready(function(){
    console.log("document ready");
});
