$(document).ready(function(){
    $("#userInput").submit(function(event) {
    $("#mex, #sf, #france").hide();

    var season = $("input:radio[name=season]:checked" ).val();

    if (season === 'summer') {
      $("#mex").show();
    } else if (season === 'winter') {
      $('#sf').show();
    
  };
    event.preventDefault();
  });

});