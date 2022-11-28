 $("#fivep").click(function(){
    var billAmt = $("#billamt").val();
    var total = (billAmt * 0.05);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    $("#tip").html("£" + total);
    if (billAmt == 0 ){
      $("#tip").html("£X.XX");
      alert("Please Enter The Bill Amount.")
   }
 });

 $("#tenp").click(function(){
   var billAmt = $("#billamt").val();
   var total = (billAmt * 0.10);
   total = Math.round(total * 100) / 100;
   total = total.toFixed(2);
   $("#tip").html("£" + total);
   if (billAmt == 0 ){
      $("#tip").html("£X.XX");
      alert("Please Enter The Bill Amount.")
   }

});


$("#twentyfivep").click(function(){
   var billAmt = $("#billamt").val();
   var total = (billAmt * 0.25);
   total = Math.round(total * 100) / 100;
   total = total.toFixed(2);
   $("#tip").html("£" + total);
   if (billAmt == 0 ){
      $("#tip").html("£X.XX");
      alert("Please Enter The Bill Amount.")
   }
   

});
$("#twopound").click(function(){
   var billAmt = $("#billamt").val();
   var total = (billAmt * 0.1) + 2;
   total = Math.round(total * 100) / 100;
   total = total.toFixed(2);
   $("#tip").html("£" + total);
   if (billAmt == 0 ){
      $("#tip").html("£X.XX");
      alert("Please Enter The Bill Amount.")
   }

});

$( "#selectable" ).selectable()
$(".ui-widget-content").click( function() {
   $("#onee").toggleClass("ui-selected");
}); 

$( "#selectable" ).selectable()
$(".ui-selected").click( function() {
   let v = $("#onee").value();
   console.log(v);
   $("#billamt").html(v) ;
}); 
 