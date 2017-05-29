$(document).ready(function(){

$("#myButton").on('click', function() {
    var data;
    $.getJSON("dat.json", function(data) {
        //Handle my response
        alert(data);
    });
});

}