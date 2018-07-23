$(document).ready(function(){



    var charOne = {
        name: "placeholder1",
        hp : 200,
        ap: 4,
        cAP: 15,
        charChoice: false,
        enemyChoice: false
    };
    var charTwo = {
        name: "placeholder2",
        hp : 300,
        ap: 8,
        cAP: 10,
        charChoice: false,
        enemyChoice: false
    };
    var charThree = {
        name: "placeholder3",
        hp: 250,
        ap: 10,
        cAP: 20,
        charChoice: false,
        enemyChoice: false
    };
    var charFour = {
        name: "placeholder4",
        hp: 150,
        ap: 10,
        cAP: 30,
        charChoice: false,
        enemyChoice: false
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


    // LOGIC FOR CHARACTER ONE PLAYER CHOICE

    $("#imgOne").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $('<h3>YOUR FIGHTER</h3>').insertAfter("header");
        $("#imgOne").appendTo("#fighterBox");
        charSelected = true;
        charOne.charChoice = true;
        console.log(charSelected);
        console.log(charOne);
        $("#imgTwo").appendTo("#botBox");
        $("#imgThree").appendTo("#botBox");
        $("#imgFour").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
        if (charSelected === true) {
            if (charOne.charChoice === true) {
                $("#imgTwo").on("click", function() {
                    if (charTwo.enemyChoice === true) {
                        return;
                    }
                    $('<div id = "enemyBox">').insertAfter("#fighterBox");
                    $('<h3>YOUR ENEMY</h3>').insertAfter("#fighterBox");
                    $("#imgTwo").appendTo("#enemyBox");
                    charTwo.enemyChoice = true;
                })
            }
        }
    })

    $("#imgTwo").on("click", function() {
        if (charTwo.enemyChoice === true) {
            charOne.hp = charOne.hp - charTwo.cAP;
            charTwo.hp = charTwo.hp - charOne.ap;
            charOne.ap = charOne.ap + 8;
            updateStats(1);
            updateStats(2);
            if (charOne.hp === 0 || charOne.hp < 0) {
                alert('losetest');
            } else if (charTwo.hp === 0 || charTwo.hp < 0) {
                alert('wintest');
            }
        }
    })
    /////////////////////////////////////////////////////////////
    $("#imgTwo").on("click", function() {
        if (charSelected === true) {
            return;
        }
        $('<div id = "fighterBox">').insertAfter("header");
        $("#imgTwo").appendTo("#fighterBox");
        charSelected = true;
        charTwo.charChoice = true;
        $("#imgOne").appendTo("#botBox");
        $("#imgThree").appendTo("#botBox");
        $("#imgFour").appendTo("#botBox");
        $("#topBox").detach();
        $("#botBox").width("fit-content");
        if (charSelected === true) {
            if (charTwo.charChoice === true) {
                $("#imgOne").on("click", function() {
                    if (charOne.enemyChoice === true){
                        return;
                    }
                    $('<div id = "enemyBox">').insertAfter("#fighterBox");
                    $("#imgOne").appendTo("#enemyBox");
                    charOne.enemyChoice = true;
                })
            }
        }
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