var config = {
    apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
    authDomain: "lasafeparking.firebaseapp.com",
    databaseURL: "https://lasafeparking.firebaseio.com",
    projectId: "lasafeparking",
    storageBucket: "lasafeparking.appspot.com",
    messagingSenderId: "647414711077"
  };

  firebase.initializeApp(config)

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in. Redirect to check-in-form
//         window.location.href = "./check-in-form.html"
    
//     } else {
//         // No user is signed in. if user is not signed in stay on login page 
    
//         window.location.href = "./login.html"
//     }
//     });

    $(document).ready(function() {
        $("#logout").on("click", function logout() {
            firebase.auth().signOut();
            window.location.href = "./login.html"
        });
    })