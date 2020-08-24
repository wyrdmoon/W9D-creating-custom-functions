function add_and_multiply (number_one , number_two) {
    var addNumbersMultiply5 = (number_one + number_two) * 5;
    return addNumbersMultiply5
}

var result = add_and_multiply(5,5);
console.log (result);

function stringLengthID (string) {
        if (string < 10 == true) {
            return string;
        } else if (string > 10 == false) {
            return string;
        }
}
var length_answer = stringLengthID("string of text");
console.log (length_answer);

function ph_string_identifier (string) {
    for (var i = 0; i <string.length; i++) {
    if (string[i].startsWith("ph")) {
        return string[i];
    } else {
        console.log ("error");
    }
    }
}


var string_input = ["book", "phonograph", "laptop", "magazine","phone","car"];
var string_result = ph_string_identifier(string_input);
console.log(string_result);