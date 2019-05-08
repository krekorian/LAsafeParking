$(document).ready(function () {

    // On click event...user clicks on check out button and is re-routed to check-out-confirm.html
    $("#checkOutBtn").on("click", function () {
        window.location.href = "./check-out-confirm.html";
    });
});