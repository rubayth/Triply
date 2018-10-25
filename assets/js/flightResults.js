$(document).ready(function(){
    let resultObj = JSON.parse(localStorage.getItem('flightData'));

    
    
    var fare = [];
    var i, j,k=0;
    for (i=0;i<resultObj.results.length;i++)
    {
        fare[i]=resultObj.results[i].fare.total_price;
    }
    
    
    var outbound = [];
    for (i=0;i<resultObj.results.length;i++)
    {
        for (j=0;j<resultObj.results[i].itineraries[0].outbound.flights.length;j++)
        {
            outbound[k]=resultObj.results[i].itineraries[0].outbound.flights[j];
            k++;
        }
    }

   
    var inbound = [];
    k=0;
    for (i=0;i<resultObj.results.length;i++)
    {
        for (j=0;j<resultObj.results[i].itineraries[0].inbound.flights.length;j++)
        {
            inbound[k]=resultObj.results[i].itineraries[0].inbound.flights[j];
            k++;
        }
    }

    console.log(outbound.length);
    console.log(inbound.length);
  /*
    $("#flightResultTable").tabulator({
        layout:"fitColumns",
        columns:[
            {title:"Airline", field:"marketing_airline", sortable:true, width:100},
            {title:"Fare", field:"fare.total_price", sortable:true, sorter:"number"},
            {title:"Departure", field:"departs_at", sortable:true, width:125},
            {title:"Arrival", field:"arrives_at", sortable:false, width:125},
            {
                title:"Origin",
                columns:[
                    {title:"Airport", field:"origin.airport"},
                    {title:"Terminal", field:"origin.terminal"},
                ],
            },
            {
                title:"Destination", 
                columns:[
                    {title:"Airport", field:"destination.airport"},
                    {title:"Terminal", field:"destination.terminal"},
                ],
            },
            {
                title:"Booking Info", 
                columns:[
                    {title:"Flight #", field:"flight_number"},
                    {title:"Class", field:"booking_info.travel_class"},
                    {title:"Seats", field:"booking_info.seats_remaining"},
                ],
            },
          ],
    });
   $("#flightResultTable").tabulator("setData",resultObj.results);
   $("#flightResultTable").tabulator("setData",outbound);
*/

//define Tabulator
$("#flightResultTable").tabulator({
    layout:"fitColumns",
    resizableColumns:false,
    columns:[
        {title:"Flights", field:"type", sorter:"string"},
    ],
    rowFormatter:function(row, data){
        var element = row.getElement(),
        data = row.getData(),
        width = element.outerWidth(),
        table;

        //clear current row data
        element.empty();

        //define a table layout structure and set width of row
        table = $("<table style='width:" + (width - 18) + "px;'><tr></tr></table>");

        //add image on left of row
        $("tr", table).append("<td><img src='assets/images/delta.jpg'></td>");

        //add row data on right hand side
        $("tr", table).append("<td><div><strong>Airline:</strong> " + data.marketing_airline + "</div><div><strong>Flight #:</strong> " + data.flight_number + "</div><div><strong>Class:</strong> " + data.booking_info.travel_class + "</div><div><strong>Seats:</strong> " + data.booking_info.seats_remaining + "</div></td>");
        $("tr", table).append("<td><div><strong>Departure:</strong> " + data.departs_at + "</div><div><strong>Arrival:</strong> " + data.arrives_at + "</div><div><strong>Fare:</strong> " + data.rind +"</div></td>");
        $("tr", table).append("<td><div><strong>Origin-Airport:</strong> " + data.origin.airport + "</div><div><strong>Terminal:</strong> " + data.origin.terminal + "</div><div><strong>Destination Airport:</strong> " + data.destination.airport + "</div><div><strong>Terminal:</strong> " + data.destination.terminal + "</div></td>");
        //append newly formatted contents to the row
        element.append(table);
    },
})

//Load Data
$("#flightResultTable").tabulator("setData", outbound);





});

