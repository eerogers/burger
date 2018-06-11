$(document).ready(function() {
function displayUneaten(){
  $("#uneaten").empty()
    $.get('/burgers/uneaten', function(data){
      console.log(data)
      for(i=0; i<data.length; i++){
        console.log(data[i])
        $("#uneaten").append("<div id='uneaten-data' data='"+data[i].id+"'>"+data[i].burger_name+"</div><button class='new' id='"+data[i].id+"'>Eat</button>")
      }
    })
} displayUneaten()

function displayEaten(){  
  $("#eaten").empty()
  $.get('/burgers/eaten', function(data){
    console.log(data)
    for(i=0; i<data.length; i++){
      $("#eaten").append("<div id='eaten-data'>"+data[i].burger_name+"</div>")
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

$('#uneaten').on("click", '.new', function(){
  console.log("click")
  var eatenId = $(this).attr("id")
  var update = {
    id: eatenId
  }
  $.post('/burgers/update', update)
  .then(function(data) {
    console.log(data)
  })
  window.location.href ="/"
})
})
