
var text=document.getElementById("tx");
var taille=document.getElementById("aziz");
var police=document.getElementById("chabou")

function test(){
    if (text.style.fontWeight=="bold") 
    {
        text.style.fontWeight="normal"
      }
     else{text.style.fontWeight="bold"} 

}

function test2(){
    if(text.style.fontStyle=="italic")
    {
        text.style.fontStyle="normal"
    }
    else{text.style.fontStyle="italic"} 

}

function test3(){
    if(text.style.textDecoration=="")
    {
        text.style.textDecoration="underline"
    }
    else{text.style.textDecoration=""} 

}
function test4(){
    text.style.fontSize=taille.value
}
function test5(){
text.style.fontFamily=police.value
}

$(document).ready(function(){
$("#a1").hover(function(){
    $(this).css("opacity","0.3");
$(".tes1").show();
},function(){
    $(this).css("opacity","1");


    $(".tes1").hide();
})

});





$(document).ready(function(){
    $("#a2").hover(function(){
        $(this).css("opacity","0.3");
    $(".tes2").show();
    },function(){
        $(this).css("opacity","1");
    
    
        $(".tes2").hide();
    })
    
    });





    $(document).ready(function(){
        $("#a3").hover(function(){
            $(this).css("opacity","0.3");
        $(".tes3").show();
        },function(){
            $(this).css("opacity","1");
        
        
            $(".tes3").hide();
        })
        
        });


        
            $(".tes1").click(function(){
            $(".back").show();
           
            }
            );
            $("#cl").click(function(){
                $(".back").hide();            });



                $(".tes2").click(function(){
                    $(".back").show();
                   
                    }
                    );
                    $("#cl").click(function(){
                        $(".back").hide();            });


                        $(".tes3").click(function(){
                            $(".back").show();
                           
                            }
                            );
                            $("#cl").click(function(){
                                $(".back").hide();            });


