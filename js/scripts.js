$(document).ready(function(){
    $("#userInput").submit(function(event) {
    $("#mex, #sf, #france, #null").hide();

    var season = $("input:radio[name=season]:checked" ).val();
    var time = $("input:radio[name=time]:checked").val();
    var money = $("input:radio[name=money]:checked").val();
    var tourist = $("input:radio[name=tourist]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    
    if (season === 'summer' && time === 'relax') {
      $("#mex").show();
    } else if (season === 'summer' && time === 'explore') {
      $('#france').show();
    }else if (season === 'winter' && time === 'explore') {
        $('#sf').show();
    }else if (season === 'winter' && time === 'relax') {
        $('#null').show();
    }else if (money === 'option1' && time === 'relax') {
        $('#sf').show();
    }else if (money === 'option2' && time === 'relax') {
        $('#mex').show();
    }else if (money === 'option1' && time === 'explore') {
        $('#sf').show();
    }else if (money === 'option2' && time === 'explore') {
        $('#france').show();
    }else if (tourist === 'option1' && time === 'explore') {
        $('#france').show();
    }else if (tourist === 'option2' && time === 'explore') {
        $('#sf').show();
    }else if (tourist === 'option2' && time === 'relax') {
        $('#mex').show();
    }else if (food === 'option1' && time === 'relax') {
        $('#mex').show();
    }else if (food === 'option2' && time === 'explore' && money === 'option2'){
        $('#france').show();
    }else if (food === 'option2' && time === 'explore' && money === 'option1'){
        $('#sf').show();
    }
    
  event.preventDefault();
   });  
});