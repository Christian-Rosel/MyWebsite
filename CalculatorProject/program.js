let num = 0;
let num2 = 0;
let setOperator = "";
function addnumber(input) {
    let output = document.getElementById("answer_box");
    if(output.value.length === 0 && input === '0') {
        return;
    }
    if(output.value.length < 16){
        output.value += input;
    }
}
function delete_num() {
    let output = document.getElementById("answer_box");
    output.value = output.value.slice(0, -1);
}
function delete_all() {
    document.getElementById("answer_box").value = "";
}
function operator(operate) {
    num = Number(document.getElementById("answer_box").value);
    setOperator = operate;
    document.getElementById("answer_box").value = "";
    if(isNaN(num)) {
        document.getElementById("answer_box").value = "Error";
    }
}
function equal() {
    num2 = Number(document.getElementById("answer_box").value);
    let output = document.getElementById("answer_box");
    let result;
    if(setOperator == '+') {
        result = num + num2;
    } else if(setOperator == '-') {
        result = num - num2;
    } else if(setOperator == '*') {
        result = num * num2;
    } else if (setOperator == '/'){
        result = num / num2;
        if(num2 === 0) {
            output.value = "Error";
        }
    }
    if(isNaN(num) || isNaN(num2)) {
        output.value = "Error";
    }
    if (result > 999999999999999) {
        output.value = "Error";
    } else {
        output.value = result;
    }
}   