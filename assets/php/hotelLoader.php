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
                            <a href="../../index.html">
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

           
           <?php $city = $_GET['city'];  
           $state = $_GET['state'];
           $check_in = $_GET['check_in'];
           $check_out = $_GET['check_out'];
           $radius=$_GET['radius'];
           ?>

        <script> 
            $(document).ready(function(){
                var city = "<?php echo $city ?>";
                var state = "<?php echo $state ?>";
                var check_in = "<?php echo $check_in ?>";
                var check_out = "<?php echo $check_out ?>";
                var key ="GbAAMbVD2orAJiVLOP3kvtZ4nPFiZMNc";
                var radius = "<?php echo $radius ?>";
                
                
                var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + state + "&key=AIzaSyA335tbrcsrZfHvYXu8m8s_Mvl1QCx1i7Q";

                var xhttp = new XMLHttpRequest();
                
                
                xhttp.open("GET", url, true);
                xhttp.send();
                xhttp.onreadystatechange = function(){
                    if (this.readyState === 4 && this.status === 200){
                        var geocode = JSON.parse(this.responseText);
                        var lat = geocode.results[0].geometry.location.lat;
                        var lng = geocode.results[0].geometry.location.lng;
                        getHotel(lat, lng, check_in, check_out, key, radius);
                    }    
                }
            });

              function getHotel(lat, lng, check_in, check_out, key, radius){
                    var url="https://api.sandbox.amadeus.com/v1.2/hotels/search-circle?apikey="+key+"&latitude=" +lat+ "&longitude="+
                        lng+"&radius="+radius+"&check_in="+check_in+"&check_out="+check_out;

                    var xhttp = new XMLHttpRequest();
                
                
                    xhttp.open("GET", url, true);
                    xhttp.send();

                    xhttp.onreadystatechange = function(){
                        if (this.readyState === 4 && this.status === 200){
                            localStorage.setItem('hotelData', this.responseText);
                            window.location.href = ("../../hotelResults.html")
                        }   
                         else if (this.status === 400){
                            window.location.href=("../../hotels.html");
                            
                         }

                    }
                }
</script>
     </body>
 </html>