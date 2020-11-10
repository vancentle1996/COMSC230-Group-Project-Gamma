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
var signInRef = firebase.database().ref("sign-up-info");

document.getElementById("signUp").addEventListener("submit", signUP);

//Submit form
function signUP(e){
    e.preventDefault();

    //Get Values
    var fullname = getInputVal("fullname");
    var email = getInputVal("email");
    var username = getInputVal("username");
    var pass = getInputVal("password");
    var rePass = getInputVal("repassword");
    var checkbox = getInputVal("checkbox");
    
    //Save sign-in info
    save(fullname, email, username, pass, rePass, checkbox);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save data to firebase
function save(fullname, email, username, pass, rePass, checkbox){
    var newUsrRef = signInRef.push();
    newUsrRef.set({
        Full_Name: fullname,
        Email_Address: email,
        Username: username,
        Password: pass,
        Repeated_Password: rePass,
        Check_Box: checkbox
    });
}