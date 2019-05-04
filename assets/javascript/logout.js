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
  console.log(user.email);
  // $('#userEmail').text(user);
});

$(document).ready(function () {

  $("#logout").on("click", function logout() {
    firebase.auth().signOut();
    window.location.href = "./login.html"
  });
})