$(document).ready(function(){
    let resultObj = JSON.parse(localStorage.getItem('hotelData'));
    

//define Tabulator
$("#hotelResultTable").tabulator({
    layout:"fitColumns",
    resizableColumns:false,
    columns:[
        {title:"Hotels", field:"type", sorter:"string"},
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
        $("tr", table).append("<td><img src='assets/images/hotel.jpg'></td>");

        //add row data on right hand side
        $("tr", table).append("<td><div><strong>Hotel:</strong> " + data.property_name + "</div><div><strong>Rate:</strong> " + data.total_price.amount + "</div><div><strong>Address:</strong> " + data.address.line1 + "</div><div><strong>Type:</strong> " + data.rooms.room_type_info + "</div></td>");

        //append newly formatted contents to the row
        element.append(table);
    },
})

//Load Data
$("#hotelResultTable").tabulator("setData", resultObj.results);





});

