function displayUneaten(){
  $("#uneaten").empty()
    $.get('/burgers/uneaten', function(data){
      console.log(data)
      for(i=0; i<data.length; i++){
      //  console.log(data[i])
        $("#uneaten").append("<div id='uneaten-data data='un"+i+"'>"+data[i].burger_name+"</div><button>Eat</button>")
      }
    })
} displayUneaten()

function displayEaten(){
//   $.ajax({ url: "/burgers/eaten",
//     cache: false,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     type: "GET",
//     success: function (result) {
//  alert(result);
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
//  alert("Error: " + thrownError);
//     }
// });
  
  
  $.get('/burgers/eaten', function(data){
    console.log(data)
    $("#eaten").empty()
    for(i=0; i<data.length; i++){
      $("#eaten").append("<div id='eaten-data' data='eat"+i+"'>"+data[i].burger_name+"</div>")
    }
  })
} displayEaten()

$("#submit").on("click", function(){
    var newB = $("#newBurger").val()
    var newEntry = {
      burger: newB
    }
    console.log(newEntry)
    $("#newBurger").val("")

    $.post('/burgers', newEntry)
    .then(function(data) {
      console.log(data)
    })
   displayUneaten()
   displayEaten()
})