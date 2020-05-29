function textMessage() {

    var timer = null;
        clearTimeout(timer);
        timer = setTimeout(doStuff, 1000);

    function doStuff() {
        var inputTxt = document.getElementById('inputtxt').value;
        var result = document.getElementById('result'); //getting result html element to output the plans on to it
        console.log(inputTxt);
        var textObj, value;
        textObj = {
            "CU": "see you",
            ":-)": "I'm happy",
            ":-(": "I'm unhappy",
            ";-)": "Wink",
            ":-P": "stick out my tongue",
            "(˜.˜)": "sleepy",
            "TA": "totally awesome",
            "CCC": "Canadian Computing Competition",
            "CUZ": "because",
            "TY": "thank-you",
            "YW": "you’re welcome",
            "TTYL": "talk to you later",
        };
        if (textObj[inputTxt]) {
            value = textObj[inputTxt];
            result.innerHTML = value;
            inputTxt.value="";
            return false;
        } else {
            result.innerHTML = inputTxt;
            return false;
        }

    }


}
