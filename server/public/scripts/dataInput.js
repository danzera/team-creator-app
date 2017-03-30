$(document).ready(function(){
  console.log("jquery Sourced") ;
  $('#clickToGetData').on("click", function() {
  //  console.log('click to show');

    $.ajax({
    type: "POST",
    url: "/getChi",
    success: function(response){
      console.log('sucessful: ' + response);
    }
  });
  });
});
