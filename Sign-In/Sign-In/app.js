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
var signInRef = firebase.database().ref("sign-in-info");

document.getElementById("loginForm").addEventListener("submit", loginForm);

//Submit form
function loginForm(e){
    e.preventDefault();

    //Get Values
    var username = getInputVal("username");
    var password = getInputVal("password");

    //Save sign-in info
    save(username, password);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save data to firebase
function save(username, password){
    var newUsrRef = signInRef.push();
    newUsrRef.set({
        username: username,
        password: password
    });
}