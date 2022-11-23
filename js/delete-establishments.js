let tableEstablishments = await document.querySelector("table");

tableEstablishments.addEventListener("dblclick", function(event)
{
    console.log(event);
    deleteEstab(event.target.parentNode);

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});