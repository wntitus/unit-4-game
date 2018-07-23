$(document).ready(function(){



    var charOne = {
        hp : 200,
        ap: 8,
        cAP: 15
    };
    var charTwo = {
        hp : 300,
        ap: 12,
        cAP: 10
    };
    var charThree = {
        hp: 250,
        ap: 18,
        cAP: 20
    };
    var charFour = {
        hp: 150,
        ap: 10,
        cAP: 30
    };

    var charSelected = false;


    function updateStats(charNum) {
        if (charNum === 1) {
            $("#charTextOne").html(charOne.hp + "<br>" + charOne.ap + "<br>" + charOne.cAP);
        } else if (charNum === 2) {
            $("#charTextTwo").html(charTwo.hp + "<br>" + charTwo.ap + "<br>" + charTwo.cAP);
        } else if (charNum === 3) {
            $("#charTextThree").html(charThree.hp + "<br>" + charThree.ap + "<br>" + charThree.cAP);
        } else if (charNum === 4) {
            $("#charTextFour").html(charFour.hp + "<br>" + charFour.hp + "<br>" + charFour.cAP);
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
        $("#imgOne").appendTo("#fighterBox");
        charSelected = true;
    })

    $("#imgTwo").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $("#imgTwo").appendTo("#fighterBox");
        charSelected = true;
    })

    $("#imgThree").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $("#imgThree").appendTo("#fighterBox");
        charSelected = true;
    })

    $("#imgFour").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $("#imgFour").appendTo("#fighterBox");
        charSelected = true;
    })

});