

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

var   name, destination, frequency, firstTrain;


$('#submit-button').on("click", function(event) {
    event.preventDefault();
    name = $('#train-name').val();
    destination = $('#destination').val();
    firstTrain = $('#first-train').val();
    frequency = $('#frequency').val();


    var employeeProfile = {
        name,
        destination,
        frequency,
        firstTrain,
    }

    db.ref().push(employeeProfile);

    $('#train-name').val("");
    $('#destination').val("");
    $('#first-train').val("");
    $('#frequency').val("");
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
    var newTrain = snapshot.val();
    $("tbody").append(
    "<tr>" +
        "<td scope='col-md'>" + newTrain.name + "</td>" +    
        "<td scope='col-md'>" + newTrain.destination + "</td>" +
        "<td scope='col-md'>" + newTrain.frequency + "</td>" +
        "<td scope='col-md'>" + "Arrival Time" + "</td>" +
        "<td scope='col-md'>" + "Time Till" + "</td>" +
    "</tr>");
});

function nextArrival(startDate){
    var jobStart = moment(startDate);
    var rightNow = moment();
    var diff = jobStart.diff(rightNow); // 86400000
    console.log(diff);
}
function minutesAway(startDate){
    var jobStart = moment(startDate);
    var rightNow = moment();
    var diff = jobStart.diff(rightNow); // 86400000
    console.log(diff);
}

console.log(db);