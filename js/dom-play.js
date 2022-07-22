//alert("Hi there!");
function myAlert(){
    alert("Im clicked");
 }
    const spans = document.querySelector("#play span");

    console.log(spans);

        for(const mySpan of spans){
            //   mySpan.addEventListener("click", myAlert);
            //alert(mySpan.dataset.actor);
        mySpan.addEventListener("click",function(ev){ 
             // alert("the current actor is " + mySpan.dataset.actor);
         highlightActor(mySpan.dataset.actor);
             });

                }
 
function highlightActor(actor){

    for(const mySpan of spans){

         }
    }
     
    if(actor == mySpan.dataset.actor){
        mySpan.style.backgroundColor ='yellow';
    } else{
        mySpan.style.backgroundColor='white';
    }

   function highlight(el){
       
       if(el.style.backgroundColor =='yellow'){
            el.style.backgroundColor ='white';
             } else{
                    el.style.backgroundColor='yellow';
        }
    }