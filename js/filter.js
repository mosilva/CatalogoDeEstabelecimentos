const filterField = document.querySelector("#filter__table");

filterField.addEventListener("input", function(){

    let establishments = document.querySelectorAll(".body__information");
    
    if(this.value.length > 0)
    {
        for(const element of establishments)
        {
            const tdName = element.querySelector(".info-Nome");
            const name = tdName.textContent;
            const inputName = this.value.toLowerCase()
            if(name.toLowerCase() != this.value.toLowerCase()){
                invisibleEstab(element);
            }
            else
            {
                visibleEstab(element);
            }
        }
    }
    else
    {
        for(const element of establishments){
                visibleEstab(element);    
        } 
    }
});