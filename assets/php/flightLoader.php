<!DOCTYPE html>
 <html lang="en"> 
     <head>
         <meta charset="utf-8"/>
         <meta name="description" content="A Travel Reservation Website">
         <meta name="author" content="TEAM HENRY">
         <meta name="keywords" content="travel, reservation">

         <link rel="icon" href="../images/icon.png">
         <title>Triply</title>
         
         <link href="../css/loader.css" rel="stylesheet">
         <link href="../css/theme.css" rel="stylesheet">
         <link href="../css/layout.css" rel="stylesheet">
         
         
         

         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
     </head>
     <body>
            <nav class="nav">
                    <div class="container">
                        <div class="logo">
                            <a href="index.html">
                                <img src="../images/logo.png" style="width:50%; height:50%";alt="Not Found"/>
                            </a>
                        </div> 
                        <ul class="menu"> 
                            <li><a href="../../index.html">Flights</a></li>
                            <li><a href="../../hotels.html">Hotels</a></li>
                         
                        </ul>
                    </div>
                </nav>
            <header>
                    
                 <div class="title-wrapper">
                     <h1 class="header-title"> Please wait</h1>
                     <div class="loader"></div>
                 </div>
                        
            </header>

           
           <?php $origin = $_GET['origin'];  
           $tripType = $_GET['tripType'];
           $adults = $_GET['adults'];
           $childs = $_GET['children'];
           $infants = $_GET['infants'];
           $classType = $_GET['classType'];
           $destination = $_GET['destination'];
           $departureDate = $_GET['departure'];
           $currency = $_GET['currency'];
           $returnDate = $_GET['return'];
           ?>

        <script> 
            $(document).ready(function(){
                var tripType = "<?php echo $tripType ?>";
                var adults = "<?php echo $adults ?>";
                var childs = "<?php echo $childs ?>";
                var infants = "<?php echo $infants ?>";
                var classType = "<?php echo $classType ?>";
                var origin = "<?php echo $origin ?>";
                var destination = "<?php echo $destination ?>";
                var departurelDate = "<?php echo $departureDate ?>";
                var currency = "<?php echo $currency ?>";
                var returnDate = "<?php echo $returnDate ?>";
                var key ="q60uj1ZALuAFWgB7Yq2XnixsmR5xX1As";
                
                var url="https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=" + key + "&origin=" + origin
                + "&destination=" + destination + "&departure_date=" + departurelDate + "&return_date=" + returnDate + "&children="+childs+"&infants="+infants
                + "&nonstop=true";

                var xhttp = new XMLHttpRequest();
                
                
                xhttp.open("GET", url, true);
                xhttp.send();

                xhttp.onreadystatechange = function(){
                    if (this.readyState === 4 && this.status === 200){
                        localStorage.setItem('flightData', this.responseText);
                        window.location.href = ("../../flightResults.html")
                    }
                    else if (this.status === 400){
                            window.location.href=("../../index.html");
                         }    
                }
                });
</script>
     </body>
 </html>