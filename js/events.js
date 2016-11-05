//define functions here
function getIt(){
  $('p').on('click', function(){
    window.alert("you cleeck-a de paragraf nice.")
  })
}
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
    //$('img')[0].style.border = "thick solid #0000FF";
  })
}
function pressIt(){
  $(document).on('keydown', function(e){
    let key = parseInt(e.which)
    console.log(key)
    if(key === 71){
        window.alert('congrats you pressed g.')
    }
  })
}
function submitIt(){
  $('form').on('submit',function(){
    window.alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
// call functions here

});
