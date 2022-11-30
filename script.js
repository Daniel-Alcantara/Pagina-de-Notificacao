$( document ).ready(function() {
    
    $( ".content_markall" ).click(function() {
        $(".box_container_person").css("background-color", "white")
        $(".circle").css("display", "none")
      })

      $( ".content_desmarkall" ).click(function() {
        $(".box_container_person").css("background-color", "#f6fafd")
        $(".circle").css("display", "block")
      });


      $( ".box_container_person" ).click(function() {

        $(this).css("background-color", "white")
        $(this).find(".circle").css("display", "none")
      });
});