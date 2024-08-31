$(function(){
    var hiragana = ["い", "う", "え", "お",
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
                    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"

    ];

    var katakana = ["イ", "ウ", "エ", "オ",
                    "カ", "キ", "ク", "ケ", "コ",
                    "サ", "シ", "ス", "セ", "ソ",
                    "タ", "チ", "ツ", "テ", "ト",
                    "ナ", "ニ", "ヌ", "ネ", "ノ",
                    "ハ", "ヒ", "フ", "ヘ", "ホ",
                    "マ", "ミ", "ム", "メ", "モ",
                    "ヤ", "ユ","ヨ",
                    "ラ", "リ", "ル", "レ", "ロ",
                    "ワ", "ヲ", "ン",

                        // dakuten

                    "ガ", "ギ", "グ", "ゲ", "ゴ",
                    "ザ", "ジ", "ズ", "ゼ", "ゾ",
                    "ダ", "ヂ", "ヅ", "デ", "ド",
                    "バ", "ビ", "ブ", "ベ", "ボ",
                    "パ", "ピ", "プ", "ペ", "ポ"                
    ]
    var currentKana = hiragana;
    var currentIndex = 0;
    var intervalId;
    var startIsSet = false;
    var delayHira =  1.0;
    var realDelay = 1000;
    var fromDone = 0;
    var hiraKataTrueFalse = true;
    var currentDelay = 1000;
    
    
    
    // katakanaHiraganaOptions

    
    $("#hiraganaoption").css("color", "#0dff00").css("text-shadow", "0px 0px 20px #0dff00");
    $("#hirakata").text("あ");

    $("#hiraganaoption").on('click', function(){

        if (hiraKataTrueFalse == true){
            if (currentKana == katakana) {
                currentKana = hiragana;
                $("#hiraganaoption").css("color", "#0dff00").css("text-shadow", "0px 0px 20px #0dff00");
                $("#katakanaoption").css("color", "#ff2f00").css("text-shadow", "none");
                $("#hirakata").text("あ").css("font-size", "50%");
            }
        }
    })

    $("#katakanaoption").on('click', function(){

        if(hiraKataTrueFalse == true){
            if (currentKana == hiragana) {
                currentKana = katakana;
                $("#katakanaoption").css("color", "#0dff00").css("text-shadow", "0px 0px 20px #0dff00");;
                $("#hiraganaoption").css("color", "#ff2f00").css("text-shadow", "none");
                $("#hirakata").text("ア").css("font-size", "50%");
            }
        }
    })


    // practiceCode


    function changeHiraIND() {
        $("#hirakata").text(currentKana[currentIndex]).css("font-size", "50%");
        currentIndex++;

        if (currentIndex > currentKana.length) {
            currentIndex = 0;
            fromDone++;
        }

        if (fromDone >= 1){
            clearInterval(intervalId);
            $("#hirakata").text("Done!").css("font-size", "40%");
            hiraKataTrueFalse = true;
            intervalId = null;
        }
    };

    $("#startBUT").on('click', function(){
        if (startIsSet == false){
            if (currentKana == hiragana) {
                $("#hirakata").text("あ").css("font-size", "50%");
            }
            if (currentKana == katakana) {
                $("#hirakata").text("ア").css("font-size", "50%");
            }
            var randHira = currentKana.sort((a, b) => 0.5 - Math.random());
            console.log(currentKana)
        }
    });

    $("#startBUT").on('click', function(){
        hiraKataTrueFalse = false;
        startIsSet = true;

        if (!intervalId) {
            fromDone = 0;
            intervalId = setInterval(changeHiraIND, realDelay);
        }
    });

    $("#stopBUT").on('click', function(){
        currentIndex = 0;
        clearInterval(intervalId);
        intervalId = null;
        hiraKataTrueFalse = true;
        if (startIsSet == true) {
            $("#hirakata").text("How'r you doin?").css("font-size", "23%" )
            startIsSet = false;
        }
    });

    // delayChange

    $("#delayDisplay").text(delayHira + "s")

    // +0.1

    $("#rightDelay").on('click', function(){
        delayHira = delayHira + 0.5;
        realDelay = realDelay + 500;
        currentDelay = currentDelay + 500;

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
        delayHira = delayHira + 0.1;
        realDelay = realDelay + 100;
        currentDelay = currentDelay + 100;

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
        delayHira = delayHira - 0.1;
        realDelay = realDelay - 100;
        currentDelay = currentDelay - 100;

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
        delayHira = delayHira - 0.5;
        realDelay = realDelay - 500;
        currentDelay = currentDelay - 500;

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