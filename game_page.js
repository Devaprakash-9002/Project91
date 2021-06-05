function send() {
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    real_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id='word_display'>Q. " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}