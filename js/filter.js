const filterField = document.querySelector("#filter__table");

filterField.addEventListener("input", function(){

    let establishments = document.querySelectorAll(".body__information");
    
    if(this.value.length > 0)
    {
        for(const element of establishments)
        {
            const tdName = element.querySelector(".info-Nome");
            const name = tdName.textContent.toLowerCase();
            const inputName = this.value.toLowerCase();
            let expressionRegular = new RegExp(this.value, "i" )
        

            if(!(expressionRegular.test(name))){
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