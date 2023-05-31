// here we select the input section through the id.
let outputScreen = document.getElementById("output-screen");

// here we apply the function for display the number on the screen or display the inbput on the screen.
function display(num){
    outputScreen.value += num; // +=num => mean we show the morer than one no. on the screen when we click.
}

// here we apply the js on the equal button .
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)    // else..... // we give two symbol at a time then it will give tio a error.  
    {
        alert("invalid");
    }
}
 
// here we apply the function or js on the clear button. 
    function Clear(){
               outputScreen.value = "";
    }

    // here we apply the function or js on the deleat button. 
    function del(){
          outputScreen.value = outputScreen.value.slice(0,-1);
    }