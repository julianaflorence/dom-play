//alert("Hi there!");
function myAlert(){
    alert("Imclicked");
}

const spans = document.querySelectorAll("#play span");


console.log(spans);

 for ( const mySpan of spans ){
     //mySpan.addEventListener("click",);
     mySpan.addEventListener("click",function(ev)
     {  highlightActor(mySpan.dataset.actor);
    
    
    });
    // alert ("the current actor is"+" "+mySpan.dataset.actor);
   
 }

 function highlightActor(actor){

    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor, highlight
        mySpan.style.backgroundColor='yellow'

        }else{// other actor, background white
            mySpan.style.backgroundColor='orange'
        }
    }
 


function highlight(el){
    if( el.style.backgroundColor == 'yellow'){
    el.style.backgroundColor='blue';
    }else{
        el.style.backgroundColor='yellow'
    }

}
}
