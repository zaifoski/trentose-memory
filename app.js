/* your code should go here */
var tmpl="<li id=\"N\" class=\"done\">"+
         "<h3>NUM</h3> "   +
         "</li>";

// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){

    for(var i=0; i< data.length; i++){
      var item = tmpl.replace("N", data[i]-1);
      item = item.replace("NUM", data[i]);
      $(".cards").append(item);
    }
    $(".opt-start").click(function(){
        for(var i=0; i< data.length; i++){
          $("#"+i).attr('class',"");
          $("#"+i).attr('class',"hidden");
        }
    });
    var counter = 0;
    // clicked function
    $(".cards").on("click", "li", function(){
        var clicked = $(this).attr("id");
        if(clicked==counter){          
            $(this).attr('class',"");
            $(this).attr('class',"done");
            if(counter==9){
                alert("You won!");
            }
        }
        else{
            alert("You lost!");
        }
        counter +=1;
    });
  
});







