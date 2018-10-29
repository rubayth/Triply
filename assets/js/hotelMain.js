$(document).ready(function(){
    
    $(".header-subtitle").on("click",function(){
        $(".call-to-action").slideToggle();
    });

    $(".call-button").on("click", function(e){
        e.preventDefault();
        $(".column img").toggleClass("bigger");
    })

    
});

// Get the modal, Sign up scripts
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
    $("#hotelForm").on('hotelSubmit', function(e) {
        e.preventDefault();
        })


    document.getElementById("submit").onclick=function(){
        var city = document.forms["hotelForm"]["city"].value;
        var state = document.forms["hotelForm"]["state"].value;
        var check_in = document.forms["hotelForm"]["check_in"].value;
        var check_out = document.forms["hotelForm"]["check_out"].value;
        var radius = document.forms["hotelForm"]["radius"].value;

        if (city==null || city=="",state==null || state=="",check_in==null || check_in=="",
        check_out==null || check_out=="", radius==null || radius=="")
    {
        alert("Please Fill All Required Field");
        return false;
    }
}
});
