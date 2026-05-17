alert("JS connected");
let display = document.getElementById("display");
function Press(value){
    let lastChar = display.value.slice(-1);
   let operator = ["+","-","*","%","/"];
     if(value ==="="){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "error";
        }
     }
    
   else if(operator.includes(value)&&operator.includes(lastChar)){
    return;
   }
   else{
    display.value += value;
   }
}
function clearAll(){
    display.value=" ";
}
function backspace(){
    display.value = display.value.slice(0,-1);
}