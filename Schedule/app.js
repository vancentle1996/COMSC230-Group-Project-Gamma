// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAF3CCl09tIdPZcC1Eg58t6BchobZcT04A",
    authDomain: "group-project-2-covid.firebaseapp.com",
    databaseURL: "https://group-project-2-covid.firebaseio.com",
    projectId: "group-project-2-covid",
    storageBucket: "group-project-2-covid.appspot.com",
    messagingSenderId: "320529019935",
    appId: "1:320529019935:web:4163c5fa21ff7944c6912a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference collections
var signInRef = firebase.database().ref("patient_info");

document.getElementById("schedule-info").addEventListener("submit", schedule);

//Submit form
function schedule(e){
    e.preventDefault();

    //Get Values
    var fullname = getInputVal("fullname");
    var address = getInputVal("address");
    var city = getInputVal("city");
    var zip = getInputVal("zip");
    var phone = getInputVal("phone");
    var date = "December 10, 2020";

    //Save sign-in info
    save(fullname, address, city, zip, phone, date);

    alert("Your Appointment is Successfully Booked. Thanks for using the app!");
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save data to firebase
function save(fullname, address, city, zip, phone, date){
    var newUsrRef = signInRef.push();
    newUsrRef.set({
        Full_Name: fullname,
        Address: address, 
        City: city,
        Zip: zip,
        Phone: phone,
        Appointment_Date: date
    });
}
