function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}
function TurnOff(){
    var x = document.getElementById("display");
    if(x.style.display === "none")
    {
        x.style.display = "block"
    }else{
        x.value = "";
        x.style.display = "none";
    }
}
function TurnOn(){
    var x = document.getElementById("display");
    if(x.style.display === "none")
    {
        x.style.display = "block"
    }else{
        x.value = "";
        x.style.display = "block";
    }
}

