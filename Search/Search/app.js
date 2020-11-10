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
var signInRef = firebase.database().ref("searched_locations");

document.getElementById("searches").addEventListener("submit", search);

//Submit form
function search(e){
    e.preventDefault();

    //Get Values
    var address = getInputVal("address");
    var zipcode = getInputVal("zipcode");

    //Save sign-in info
    save(address, zipcode);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save data to firebase
function save(address, zipcode){
    var newUsrRef = signInRef.push();
    newUsrRef.set({
        Address: address,
        Zip_code: zipcode
    });
}