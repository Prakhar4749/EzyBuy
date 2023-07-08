 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA8hCZSblJmYnrL9Kb4ssRWYLX0Lwjh8Ew",
    authDomain: "signup-form-18f5e.firebaseapp.com",
    projectId: "signup-form-18f5e",
    storageBucket: "signup-form-18f5e.appspot.com",
    messagingSenderId: "462673782376",
    appId: "1:462673782376:web:5e972464cc3e37eabdbddd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

//   Getting all the objects of HTML

var emails = document.getElementById("email")
var passwords = document.getElementById("password")

// making a function for storing data 

window.signup = function(e){
    e.preventDefault();
    var obj = {
        emails:emails.value,
        passwords:passwords.value,
    }
    createUserWithEmailAndPassword(auth, obj.emails,obj.passwords)
    .then(function(success)
    {
        alert ("Signup Successfully")
    })
    .catch(function(err)
    {
        alert("Error" + err)
    })
    console.log(obj)
};

export createUserWithEmailAndPassword();