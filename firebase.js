

var firebaseConfig = {
apiKey: "AIzaSyAY07Ya_pUVlJ5ABnqr4BgSBItKSip1g8A",
authDomain: "dojo-12c97.firebaseapp.com",
databaseURL: "https://dojo-12c97.firebaseio.com",
projectId: "dojo-12c97",
storageBucket: "dojo-12c97.appspot.com",
messagingSenderId: "189847657853",
appId: "1:189847657853:web:f8b52d222530f7d1"
};

//a Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

var name, job, start, wage;


$('#submit-button').on("click", function(event) {
    event.preventDefault();
    name = $('#employee-name').val();
    job = $('#job-title').val();
    start = $('#start-date').val();
    wage = $('#monthly-wage').val();

    var employeeProfile = {
        name,
        job,
        start,
        wage
    }

    db.ref().push(employeeProfile);

    $('#employee-name').val("");
    $('#job-title').val("");;
    $('#start-date').val("");
    $('#monthly-wage').val("");
    console.log(name + job + start + wage);
});
/*
db.ref().once('value').then(function(snapshot) {
    var currentData = snapshot.val();
    for (var key in currentData) {
        //console.log(currentData[key]); 
        $("tbody").append(
        "<tr>" +
            "<th scope='col-md'>" + currentData[key].name + "</th>" +
            "<th scope='col-md'>" + currentData[key].job + "</th>" +
            "<th scope='col-md'>" + currentData[key].start + "</th>" +
            "<th scope='col-md'>" + currentData[key].start + "</th>" +
            "<th scope='col-md'>" + currentData[key].wage + "</th>" +
            "<th scope='col-md'>" + currentData[key].wage + "</th>" +
        "</tr>");
    }

});*/

db.ref().on("child_added", function(snapshot) {
    var newEmployee = snapshot.val();
    $("tbody").append(
    "<tr>" +
        "<td scope='col-md'>" + newEmployee.name + "</td>" +    
        "<td scope='col-md'>" + newEmployee.job + "</td>" +
        "<td scope='col-md'>" + newEmployee.start + "</td>" +
        "<td scope='col-md'>" + monthsWorked(newEmployee.start) + "</td>" +
        "<td scope='col-md'>" + newEmployee.wage + "</td>" +
        "<td scope='col-md'>" + newEmployee.wage + "</td>" +
    "</tr>");
});

function monthsWorked(startDate){
    var jobStart = moment(startDate);
    var rightNow = moment();
    var diff = jobStart.diff(rightNow); // 86400000
    console.log(diff);
}

console.log(db);