var colors = ["red","blue","green","yellow","purple"];
var i = 0;
var selectedColor;
    function button_click() {
         document.getElementById("AddHere").innerHTML = "YOU CAN DO IT!";
        selectedColor = colors[i];
        document.getElementById("box").style.background= selectedColor;
        i++;
        if(i > colors.length)
            i = 0;
    }