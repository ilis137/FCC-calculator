let operator;
let operators = ['+', '-', '/', '*']
let args = [];
let buffer = '';
let displayVal = '0';
$(document).ready(function() {
    display();
    let screen = $('#screen');
    $('#clear').click(clearInput);
    $('.key').click(getKey);
});


function clearInput() {
    displayVal = '0';
    buffer = '';
    operator = undefined;
    args = [];
    display();
}



function getKey() {
    let opPresent = false;
    const keyValue = $(this).text();
    if (keyValue === '=') {
        args.push(buffer);
        buffer = '';
        opPresent = true;

        calculate();
        displayVal = args[0];
        display();

    }
    operators.map(op => {
        if (op === keyValue) {
            if (operator == displayVal[displayVal.length - 1]) {
                operator = op;
                displayVal = displayVal.substring(0, displayVal.length - 1) + operator;
                opPresent = true;
                display();
                return;
            }

            if (operator) {
                args.push(buffer);
                buffer = '';
                opPresent = true;
                calculate();
            }
            operator = op;
            displayVal += operator;
            if (buffer !== '')
                args.push(buffer);
            buffer = '';
            display();

            opPresent = true;
            return;
        }

    });

    if (opPresent) return;
    if (keyValue == 0 && buffer == '' && operator == undefined) {
        display();
        return;
    }
    if (keyValue == '.' && buffer[buffer.length - 1] == '.') {
        return;

    }
    if (keyValue == '.' && displayVal == '0') {
        displayVal = displayVal + keyValue;
        buffer = displayVal;
    } else if (displayVal == '0') {
        displayVal = keyValue;
        buffer = buffer + keyValue;
    } else {
        displayVal += keyValue;
        buffer = buffer + keyValue;
    }
    display();

}

function display() {
    $('#screen').text(displayVal);
}

function calculate() {
    const op = operator;
    let output = 0;

    switch (op) {
        case '+':
            output = Number(args[0]) + Number(args[1]);

            if (output != Math.floor(output))
                output = output.toFixed(4);

            args = [];
            args.push(output);

            break;
        case '-':
            output = Number(args[0]) - Number(args[1]);
            if (output != Math.floor(output))
                output = output.toFixed(4);

            args = [];
            args.push(output);

            break;
        case '*':
            output = Number(args[0]) * Number(args[1]);
            if (output != Math.floor(output))
                output = output.toFixed(4);

            args = [];
            args.push(output);

            break;
        case '/':
            output = Number(args[0]) / Number(args[1]);
            if (output != Math.floor(output))
                output = output.toFixed(4);

            args = [];
            args.push(output);

            break;
    }


}