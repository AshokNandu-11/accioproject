let count =0;
let countDisplay = document.getElementById("count");
let errorMessage = document.getElementById('error-message');

function updateDisplay(){
    countDisplay.textContent = count;

}
function increament(){
    count++;
    errorMessage.textContent="";
    updateDisplay();

}
function decreament(){
    if(count >0){
        count--;
        errorMessage.textContent="";
    }else{
        errorMessage.textContent ="Error : Cannot go below 0";
    }
    updateDisplay();
}
function  clearCount(){
    count=0;
    errorMessage.textContent="";
    updateDisplay();
}
