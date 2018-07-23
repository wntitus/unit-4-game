$(document).ready(function(){



    var charOne = {
        name: "placeholder1",
        hp : 200,
        ap: 8,
        cAP: 15
    };
    var charTwo = {
        name: "placeholder2",
        hp : 300,
        ap: 12,
        cAP: 10
    };
    var charThree = {
        name: "placeholder3",
        hp: 250,
        ap: 18,
        cAP: 20
    };
    var charFour = {
        name: "placeholder4",
        hp: 150,
        ap: 10,
        cAP: 30
    };

    var charSelected = false;


    function updateStats(charNum) {
        if (charNum === 1) {
            $("#charTextOne").html(charOne.hp + "<br>" + charOne.ap + "<br>" + charOne.cAP);
            $("#charNameOne").html(charOne.name);
        } else if (charNum === 2) {
            $("#charTextTwo").html(charTwo.hp + "<br>" + charTwo.ap + "<br>" + charTwo.cAP);
            $("#charNameTwo").html(charTwo.name);
        } else if (charNum === 3) {
            $("#charTextThree").html(charThree.hp + "<br>" + charThree.ap + "<br>" + charThree.cAP);
            $("#charNameThree").html(charThree.name);
        } else if (charNum === 4) {
            $("#charTextFour").html(charFour.hp + "<br>" + charFour.hp + "<br>" + charFour.cAP);
            $("#charNameFour").html(charFour.name);
        }
    }

    updateStats(1);
    updateStats(2);
    updateStats(3);
    updateStats(4);


    $("#imgOne").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $("#imgOne").appendTo("#fighterBox");
        charSelected = true;
        $("#imgTwo").appendTo("#botBox");
        $("#imgThree").appendTo("#botBox");
        $("#imgFour").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
    })

    $("#imgTwo").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $("#imgTwo").appendTo("#fighterBox");
        charSelected = true;
        $("#imgOne").appendTo("#botBox");
        $("#imgThree").appendTo("#botBox");
        $("#imgFour").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
    })

    $("#imgThree").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $("#imgThree").appendTo("#fighterBox");
        charSelected = true;
        $("#imgOne").appendTo("#botBox");
        $("#imgTwo").appendTo("#botBox");
        $("#imgFour").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
    })

    $("#imgFour").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $("#imgFour").appendTo("#fighterBox");
        charSelected = true;
        $("#imgOne").appendTo("#botBox");
        $("#imgTwo").appendTo("#botBox");
        $("#imgThree").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
    })

});