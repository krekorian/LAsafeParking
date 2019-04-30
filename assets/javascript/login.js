var config = {
    apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
    authDomain: "lasafeparking.firebaseapp.com",
    databaseURL: "https://lasafeparking.firebaseio.com",
    projectId: "lasafeparking",
    storageBucket: "lasafeparking.appspot.com",
    messagingSenderId: "647414711077"
  };

  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in. Redirect to check-in-form
      window.location.href = "./main-menu.html"
  
    } else {
      // No user is signed in. if user is not signed in stay on login page 
  
      // window.location.href = "./login.html"
    }
  });
  
$(document).ready(function() {
  $("#login").on("click", function login() {
    event.preventDefault();
    var userLogin = $("#userId").val() + '@gmail.com'
    var userPassword = $("#userPass").val();

    console.log(userLogin);
    console.log(userPassword);

    alert("youre logged in")

    firebase.auth().signInWithEmailAndPassword(userLogin, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert("Error:" + errorMessage);
    });

  })




});
