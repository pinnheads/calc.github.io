let equation, finalResult=0, history=[];
// Display logic on button click
function display(value){
    document.getElementById("result").value+=value;
}
// Calculation
document.querySelector(".solve").addEventListener("click", function(){
    equation = document.getElementById("result").value;
    finalResult = eval(equation);
    document.getElementById("result").value = finalResult;
    //Keeps a track of the computations done till the page is refreshed
    var solvedEquation = equation + " = " + finalResult;
    $('ol').append('<li>' + solvedEquation + '</li>')
});

// Clear function
document.querySelector(".clear-button").addEventListener("click", function(){
    document.getElementById("result").value = "";
});
