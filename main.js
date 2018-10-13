let operator;
let operators = ['+', '-', '/', '*']
let args = [];
let buffer = '';
let displayVal = '';
$(document).ready(function() {
    let screen = $('#screen');
    //  let inputVal = screen.text();

    $('.key').click(getKey);
});


function getKey() {
    let opPresent = false;
    const keyValue = $(this).text();
    operators.map(op => {
        if (op === keyValue) {
            console.log(keyValue);
            if (operator) {
                args.push(buffer);
                buffer = '';
                calculate();
            }
            operator = op;
            displayVal += operator;
            args.push(buffer);
            buffer = ''
            display();

            opPresent = true;
            return;
        }

    });

    if (opPresent) return;
    displayVal += keyValue;
    buffer = buffer + keyValue;
    display();

}

function display() {
    $('#screen').text(displayVal);
}

function calculate() {
    const op = operator;
    let output = 0;
    console.log(op);
    switch (op) {
        case '+':
            output = Number(args[0]) + Number(args[1]);
            console.log(args[0]);
            console.log(args[1]);
            args = [];
            args.push(output);
            break;
        case '-':
            output = Number(args[0]) - Number(args[1]);
            console.log(output);
            args = [];
            args.push(output);
            break;
        case '*':
            output = Number(args[0]) * Number(args[1]);
            console.log(output);
            args = [];
            args.push(output);
            break;
        case '/':
            output = Number(args[0]) / Number(args[1]);
            console.log(output);
            args = [];
            args.push(output);
            break;
    }
    console.log(output);

}