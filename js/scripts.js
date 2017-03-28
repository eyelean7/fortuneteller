$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var luckyTotal=0;
    var unluckyTotal=0;
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyTotal+=1;
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unluckyTotal+=1;
    });
    if(luckyTotal>unluckyTotal){
      outText="lucky";
    } else if (luckyTotal<unluckyTotal){
      outText="unlucky";
    } else {
      outText="neutral";
    }
    $("#form").hide();
    $("#outcome").text(outText);
    $("#output").show();

  });
});
