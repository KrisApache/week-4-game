$(document).ready(function () {

    //// variables
    var randomNumber = 0;
    var winCount = 0;
    var lossCount = 0;
    var userCount = 0;
    var numberOptions = [];
    
    function assignRandomVal(elementID){
        var jewelVal = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        $(elementID).val(jewelVal); 
        numberOptions.splice($.inArray(jewelVal, numberOptions),1);
    }

    //// functions
    function initGame(){
        userCount = 0;
        randomNumber = Math.floor(Math.random() * 50) + 30;
        numberOptions = [10, 1, 3, 7];

        // randomly assign values to jewels
        // $("#ruby").val(10);     
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
        
        if(userCount == randomNumber){
            winCount++;
            $("#win").html(winCount);
            $("#statusMsg").html("You Win!");
            setTimeout(initGame, 2000);
            // initGame();
        }
        else if(userCount > randomNumber){
            lossCount++;
            $("#loss").html(lossCount);
            $("#statusMsg").html("You Lose!");
            setTimeout(initGame, 2000);
            // initGame();
        }

    });   

});