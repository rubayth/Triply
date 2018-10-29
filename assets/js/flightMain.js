$(document).ready(function(){
    
    $(".header-subtitle").on("click",function(){
        $(".call-to-action").slideToggle();
    });

    $(".call-button").on("click", function(e){
        e.preventDefault();
        $(".column img").toggleClass("bigger");
    })

    /*$( function() {
        $( "#departure" ).datepicker();
        $.datepicker.formatDate( "yy-mm-dd", new Date( 2007, 1 - 1, 26 ) );
      } );
     */ 
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
    $("#searchForm").on('submit', function(e) {
        e.preventDefault();
        })


    document.getElementById("submit").onclick=function(){
        var tripType = document.forms["searchForm"]["tripType"].value;
        var adults = parseInt(document.forms["searchForm"]["adults"].value);
        var childs = parseInt(document.forms["searchForm"]["children"].value);
        var infants = parseInt(document.forms["searchForm"]["infants"].value);
        var classType = document.forms["searchForm"]["classType"].value;
        var origin = document.forms["searchForm"]["origin"].value;
        var destination = document.forms["searchForm"]["destination"].value;
        var departurelDate = document.forms["searchForm"]["departure"].value;
        var currency = document.forms["searchForm"]["currency"].value;
        var returnDate = document.forms["searchForm"]["return"].value;

        if (origin==null || origin=="",destination==null || destination=="",departurelDate==null || departurelDate=="",
        currency==null || currency=="", returnDate==null || returnDate=="")
    {
        alert("Please Fill All Required Field");
        return false;
    }
}

});

