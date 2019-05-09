var config = {
  apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
  authDomain: "lasafeparking.firebaseapp.com",
  databaseURL: "https://lasafeparking.firebaseio.com",
  projectId: "lasafeparking",
  storageBucket: "lasafeparking.appspot.com",
  messagingSenderId: "647414711077"
};

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in. Redirect to check-in-form
    window.location.href = "./main-menu.html";
    console.log(user.email);
  };
});

// on click event listener to create login function
$(document).ready(function () {
  $("#login").on("click", function login() {

    // prevents default form 
    event.preventDefault();


    // create variables to store the userId and userPass values 
    var userLogin = $("#userId").val() + '@gmail.com';
    var userPassword = $("#userPass").val();
    var lotNumber = $("#userId").val();
    lotNumber = "lot" + lotNumber;
    localStorage.setItem('lotNumber', lotNumber);

    console.log(userLogin);
    console.log(userPassword);

    // alert("youre logged in");

    // error code to be returned if login not successful
    firebase.auth().signInWithEmailAndPassword(userLogin, userPassword).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  })




});
