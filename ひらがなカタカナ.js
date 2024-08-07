$(function(){
    var hiragana = ["あ", "い", "う", "え", "お",
                    "か", "き", "く", "け", "こ",
                    "さ", "し", "す", "せ", "そ",
                    "た", "ち", "つ", "て", "と",
                    "な", "に", "ぬ", "ね", "の",
                    "は", "ひ", "ふ", "へ", "ほ",
                    "ま", "み", "む", "め", "も",
                    "や", "ゆ", "よ",
                    "ら", "り", "る", "れ", "ろ",
                    "わ", "を", "ん",

                    // dakuten

                    "が", "ぎ", "ぐ", "げ", "ご",
                    "ざ", "じ", "ず", "ぜ", "ぞ",
                    "だ", "ぢ", "づ", "で", "ど",
                    "ば", "び", "ぶ", "べ", "ぼ",
                    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",

    ];
    var currentIndex = 0;
    var intervalId;
    var startIsSet = false;
    var delayHira =  1.0;
    var realDelay = 1000;
    var fromDone = 0;
    
    

    function changeHiraIND() {
        $("#hirakata").text(hiragana[currentIndex]).css("font-size", "50%");
        currentIndex++;

        if (currentIndex >= hiragana.length) {
            currentIndex = 0;
            fromDone++;
        }

        if (fromDone >= 1){
            clearInterval(intervalId);
            $("#hirakata").text("Done!").css("font-size", "40%");
            intervalId = null;
        }
    };

    $("#startBUT").on('click', function(){
        if (startIsSet == false){
            $("#hirakata").text("あ").css("font-size", "50%");
            var randHira = hiragana.sort((a, b) => 0.5 - Math.random());
            console.log(hiragana)
        }
    });

    $("#startBUT").on('click', function(){
        startIsSet = true;
        if (!intervalId) {
            fromDone = 0;
            intervalId = setInterval(changeHiraIND, realDelay);
        }
    });

    $("#stopBUT").on('click', function(){
        clearInterval(intervalId);
        intervalId = null;
        if (startIsSet == true) {
            $("#hirakata").text("How'r you doin?").css("font-size", "23%" )
            startIsSet = false;
        }
    });

    // delayChange

    $("#delayDisplay").text(delayHira + "s")

    // +0.1

    $("#rightDelay").on('click', function(){
        delayHira = delayHira + 0.1;
        realDelay = realDelay + 100;

        if (delayHira > 2){
            delayHira = 2;
        }

        if (realDelay > 2000){
            realDelay = 2000;
        }

        $("#delayDisplay").text(delayHira.toFixed(1) + "s")
    })

    // +0.5

    $("#centerDelayR").on('click', function(){
        delayHira = delayHira + 0.5;
        realDelay = realDelay + 500;

        if (delayHira > 2){
            delayHira = 2;
        }

        if (realDelay > 2000){
            realDelay = 2000;
        }
        $("#delayDisplay").text(delayHira.toFixed(1) + "s")
    })

    // -0.5

    $("#centerDelayL").on('click', function(){
        delayHira = delayHira - 0.5;
        realDelay = realDelay - 500;

        if (delayHira < 0.5){
            delayHira = 0.5;
        }

        if (realDelay < 500){
            realDelay = 500;
        }
        $("#delayDisplay").text(delayHira.toFixed(1) + "s")
    })

    // -0.1

    $("#leftDelay").on('click', function(){
        delayHira = delayHira - 0.1;
        realDelay = realDelay - 100;

        if (delayHira < 0.5){
            delayHira = 0.5;
        }

        if (realDelay < 500){
            realDelay = 500;
        }

        $("#delayDisplay").text(delayHira.toFixed(1) + "s")
    })

    if (delayHira > 2){
        delayHira = 2;
    }
})