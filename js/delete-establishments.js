let tableEstablishments = document.querySelector("table");

tableEstablishments.addEventListener("dblclick", function(event)
{
    deleteEstab(event.target.parentNode);

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);


});