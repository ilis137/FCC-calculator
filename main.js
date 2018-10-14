let operator;
let operators = ['+', '-', '/', '*']
let args = [];
let buffer = '';
let displayVal = '';
$(document).ready(function() {
    let screen = $('#screen');
    //  let inputVal = screen.text();
    $('#clear').click(clearInput);
    $('.key').click(getKey);
});


function clearInput() {
    displayVal = '';
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
            console.log(keyValue);
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
            console.log(output);
            args = [];
            args.push(output);

            break;
        case '-':
            output = Number(args[0]) - Number(args[1]);
            console.log(args[0]);
            console.log(args[1]);
            console.log(output);
            args = [];
            args.push(output);

            break;
        case '*':
            output = Number(args[0]) * Number(args[1]);
            console.log(args[0]);
            console.log(args[1]);
            console.log(output);
            args = [];
            args.push(output);

            break;
        case '/':
            output = Number(args[0]) / Number(args[1]);
            console.log(args[0]);
            console.log(args[1]);
            console.log(output);
            args = [];
            args.push(output);

            break;
    }


}