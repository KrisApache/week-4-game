$(document).ready(function () {

    //// variables
    var randomNumber = 0; 
    var winCount = 0;
    var lossCount = 0;
    var userCount = 0;
    var isGameEnd = false;
    var numberOptions = [];
    
    //// functions

    // function to assign random element from numberOptions[] to button values
    function assignRandomVal(elementID){
        var jewelVal = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        $(elementID).val(jewelVal); 
        numberOptions.splice($.inArray(jewelVal, numberOptions),1);
    }

    // function to reset game to initial state
    function initGame(){
        userCount = 0;
        randomNumber = Math.floor(Math.random() * 101) + 19;
        isGameEnd = false;
        // numberOptions = [10, 1, 3, 7];

        // add random values to numberOptions
        var max = 1;
        var min = 1;
        for (i =0; i<4 ; i++){
        numberOptions.push(Math.floor(Math.random() * (max - min)) + min);
        min = max+1;
        max = min+3; 
        };

        // randomly assign values to jewels
        assignRandomVal("#ruby");   
        assignRandomVal("#diamond");
        assignRandomVal("#amber");
        assignRandomVal("#emerald");
      
        // display variable values
        $("#userCount").html(userCount);
        $("#random-num").html(randomNumber);
        $("#statusMsg").html("");
    };

    initGame();

    //// events
    $(".btnJewel").click(function () {
        var jewelValue = $(this).attr("value");
        
        userCount = userCount + parseInt(jewelValue);
        
        $("#userCount").html(userCount);
        
        if((userCount == randomNumber) && !isGameEnd){
            winCount++;
            isGameEnd = true;
            $("#win").html(winCount);
            $("#statusMsg").html("You Win!");
            setTimeout(initGame, 2000);
        }
        else if((userCount > randomNumber) && !isGameEnd){
            lossCount++;
            isGameEnd = true;
            $("#loss").html(lossCount);
            $("#statusMsg").html("You Lose!");
            setTimeout(initGame, 2000);
        }

    });   

});