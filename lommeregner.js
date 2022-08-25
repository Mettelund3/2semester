function performOperation(operator) {
    var x = parseInt(document.getElementById('txt1').value);
    var y = parseInt(document.getElementById('txt2').value);
    // Int
    var result;
    switch(operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y == 0)
                result = "kan ikke dividere med 0";
            else
                result = x / y;
            break;
        default:
            result = 0;
            break;
    }

    /*
    if (operator == "+")
        result = x + y;
    else if (operator == "-")
        result = x - y;
    else if (operator == "*")
        result = x * y;
    else if (operator == "/")
        result = x / y;
    */

    document.getElementById('result').value = result;
}

function addTwo () {
    performOperation("+");
}

function substractTwo () {
    performOperation("-");
}

function timesTwo () {
    performOperation("*")
}

function divideTwo () {
    performOperation("/")
}