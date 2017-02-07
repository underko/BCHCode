var table_b15 = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [1, 0, 5, 9, 15, 2, 11, 14, 10, 3, 8, 6, 13, 12, 7, 4],
    [2, 5, 0, 6, 10, 1, 3, 12, 15, 11, 4, 9, 7, 14, 13, 8],
    [3, 9, 6, 0, 7, 11, 2, 4, 13, 1, 12, 5, 10, 8, 15, 14],
    [4, 15, 10, 7, 0, 8, 12, 3, 5, 14, 2, 13, 6, 11, 9, 1],
    [5, 2, 1, 11, 8, 0, 9, 13, 4, 6, 15, 3, 14, 7, 12, 10],
    [6, 11, 3, 2, 12, 9, 0, 10, 14, 5, 7, 1, 4, 15, 8, 13],
    [7, 14, 12, 4, 3, 13, 10, 0, 11, 15, 6, 8, 2, 5, 1, 9],
    [8, 10, 15, 13, 5, 4, 14, 11, 0, 12, 1, 7, 9, 3, 6, 2],
    [9, 3, 11, 1, 14, 6, 5, 15, 12, 0, 13, 2, 8, 10, 4, 7],
    [10, 8, 4, 12, 2, 15, 7, 6, 1, 13, 0, 14, 3, 9, 11, 5],
    [11, 6, 9, 5, 13, 3, 1, 8, 7, 2, 14, 0, 15, 4, 10, 12],
    [12, 13, 7, 10, 6, 14, 4, 2, 9, 8, 3, 15, 0, 1, 5, 11],
    [13, 12, 14, 8, 11, 7, 15, 5, 3, 10, 9, 4, 1, 0, 2, 6],
    [14, 7, 13, 15, 9, 12, 8, 1, 6, 4, 11, 10, 5, 2, 0, 3],
    [15, 4, 8, 14, 1, 10, 13, 9, 2, 7, 5, 12, 11, 6, 3, 0]
];

var table_b31 = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 0, 19, 6, 30, 11, 3, 28, 23, 21, 17, 5, 20, 24, 15, 14, 25, 10, 31, 2, 12, 9, 26, 8, 13, 16, 22, 29, 7, 27, 4, 18],
    [2, 19, 0, 20, 7, 31, 12, 4, 29, 24, 22, 18, 6, 21, 25, 16, 15, 26, 11, 1, 3, 13, 10, 27, 9, 14, 17, 23, 30, 8, 28, 5],
    [3, 6, 20, 0, 21, 8, 1, 13, 5, 30, 25, 23, 19, 7, 22, 26, 17, 16, 27, 12, 2, 4, 14, 11, 28, 10, 15, 18, 24, 31, 9, 29],
    [4, 30, 7, 21, 0, 22, 9, 2, 14, 6, 31, 26, 24, 20, 8, 23, 27, 18, 17, 28, 13, 3, 5, 15, 12, 29, 11, 16, 19, 25, 1, 10],
    [5, 11, 31, 8, 22, 0, 23, 10, 3, 15, 7, 1, 27, 25, 21, 9, 24, 28, 19, 18, 29, 14, 4, 6, 16, 13, 30, 12, 17, 20, 26, 2],
    [6, 3, 12, 1, 9, 23, 0, 24, 11, 4, 16, 8, 2, 28, 26, 22, 10, 25, 29, 20, 19, 30, 15, 5, 7, 17, 14, 31, 13, 18, 21, 27],
    [7, 28, 4, 13, 2, 10, 24, 0, 25, 12, 5, 17, 9, 3, 29, 27, 23, 11, 26, 30, 21, 20, 31, 16, 6, 8, 18, 15, 1, 14, 19, 22],
    [8, 23, 29, 5, 14, 3, 11, 25, 0, 26, 13, 6, 18, 10, 4, 30, 28, 24, 12, 27, 31, 22, 21, 1, 17, 7, 9, 19, 16, 2, 15, 20],
    [9, 21, 24, 30, 6, 15, 4, 12, 26, 0, 27, 14, 7, 19, 11, 5, 31, 29, 25, 13, 28, 1, 23, 22, 2, 18, 8, 10, 20, 17, 3, 16],
    [10, 17, 22, 25, 31, 7, 16, 5, 13, 27, 0, 28, 15, 8, 20, 12, 6, 1, 30, 26, 14, 29, 2, 24, 23, 3, 19, 9, 11, 21, 18, 4],
    [11, 5, 18, 23, 26, 1, 8, 17, 6, 14, 28, 0, 29, 16, 9, 21, 13, 7, 2, 31, 27, 15, 30, 3, 25, 24, 4, 20, 10, 12, 22, 19],
    [12, 20, 6, 19, 24, 27, 2, 9, 18, 7, 15, 29, 0, 30, 17, 10, 22, 14, 8, 3, 1, 28, 16, 31, 4, 26, 25, 5, 21, 11, 13, 23],
    [13, 24, 21, 7, 20, 25, 28, 3, 10, 19, 8, 16, 30, 0, 31, 18, 11, 23, 15, 9, 4, 2, 29, 17, 1, 5, 27, 26, 6, 22, 12, 14],
    [14, 15, 25, 22, 8, 21, 26, 29, 4, 11, 20, 9, 17, 31, 0, 1, 19, 12, 24, 16, 10, 5, 3, 30, 18, 2, 6, 28, 27, 7, 23, 13],
    [15, 14, 16, 26, 23, 9, 22, 27, 30, 5, 12, 21, 10, 18, 1, 0, 2, 20, 13, 25, 17, 11, 6, 4, 31, 19, 3, 7, 29, 28, 8, 24],
    [16, 25, 15, 17, 27, 24, 10, 23, 28, 31, 6, 13, 22, 11, 19, 2, 0, 3, 21, 14, 26, 18, 12, 7, 5, 1, 20, 4, 8, 30, 29, 9],
    [17, 10, 26, 16, 18, 28, 25, 11, 24, 29, 1, 7, 14, 23, 12, 20, 3, 0, 4, 22, 15, 27, 19, 13, 8, 6, 2, 21, 5, 9, 31, 30],
    [18, 31, 11, 27, 17, 19, 29, 26, 12, 25, 30, 2, 8, 15, 24, 13, 21, 4, 0, 5, 23, 16, 28, 20, 14, 9, 7, 3, 22, 6, 10, 1],
    [19, 2, 1, 12, 28, 18, 20, 30, 27, 13, 26, 31, 3, 9, 16, 25, 14, 22, 5, 0, 6, 24, 17, 29, 21, 15, 10, 8, 4, 23, 7, 11],
    [20, 12, 3, 2, 13, 29, 19, 21, 31, 28, 14, 27, 1, 4, 10, 17, 26, 15, 23, 6, 0, 7, 25, 18, 30, 22, 16, 11, 9, 5, 24, 8],
    [21, 9, 13, 4, 3, 14, 30, 20, 22, 1, 29, 15, 28, 2, 5, 11, 18, 27, 16, 24, 7, 0, 8, 26, 19, 31, 23, 17, 12, 10, 6, 25],
    [22, 26, 10, 14, 5, 4, 15, 31, 21, 23, 2, 30, 16, 29, 3, 6, 12, 19, 28, 17, 25, 8, 0, 9, 27, 20, 1, 24, 18, 13, 11, 7],
    [23, 8, 27, 11, 15, 6, 5, 16, 1, 22, 24, 3, 31, 17, 30, 4, 7, 13, 20, 29, 18, 26, 9, 0, 10, 28, 21, 2, 25, 19, 14, 12],
    [24, 13, 9, 28, 12, 16, 7, 6, 17, 2, 23, 25, 4, 1, 18, 31, 5, 8, 14, 21, 30, 19, 27, 10, 0, 11, 29, 22, 3, 26, 20, 15],
    [25, 16, 14, 10, 29, 13, 17, 8, 7, 18, 3, 24, 26, 5, 2, 19, 1, 6, 9, 15, 22, 31, 20, 28, 11, 0, 12, 30, 23, 4, 27, 21],
    [26, 22, 17, 15, 11, 30, 14, 18, 9, 8, 19, 4, 25, 27, 6, 3, 20, 2, 7, 10, 16, 23, 1, 21, 29, 12, 0, 13, 31, 24, 5, 28],
    [27, 29, 23, 18, 16, 12, 31, 15, 19, 10, 9, 20, 5, 26, 28, 7, 4, 21, 3, 8, 11, 17, 24, 2, 22, 30, 13, 0, 14, 1, 25, 6],
    [28, 7, 30, 24, 19, 17, 13, 1, 16, 20, 11, 10, 21, 6, 27, 29, 8, 5, 22, 4, 9, 12, 18, 25, 3, 23, 31, 14, 0, 15, 2, 26],
    [29, 27, 8, 31, 25, 20, 18, 14, 2, 17, 21, 12, 11, 22, 7, 28, 30, 9, 6, 23, 5, 10, 13, 19, 26, 4, 24, 1, 15, 0, 16, 3],
    [30, 4, 28, 9, 1, 26, 21, 19, 15, 3, 18, 22, 13, 12, 23, 8, 29, 31, 10, 7, 24, 6, 11, 14, 20, 27, 5, 25, 2, 16, 0, 17],
    [31, 18, 5, 29, 10, 2, 27, 22, 20, 16, 4, 19, 23, 14, 13, 24, 9, 30, 1, 11, 8, 25, 7, 12, 15, 21, 28, 6, 26, 3, 17, 0]
];

var table = [];
var dimension = 0;
var polynom_array = [];

function CalculateBCH() {

    var input = document.getElementById("input_field").value;

    if (!ValidateInput(input)) { return; }

    var output_string = "";
    
    var s1_array = GenerateS1Array(input);
    var s3_array = GenerateS3Array(input);
    polynom_array = s1_array;

    output_string += "w(<i>x</i>) = " + GeneratePolynom(s1_array) + "<br>";
    output_string += "<br>";

    var s1_string = GenerateS1(s1_array);
    var s3_string = GenerateS3(s3_array);

    output_string += s1_string + "<br>";
    output_string += s3_string + "<br>";
    output_string += "<br>";

    var s1_sum = GetSSum(s1_array);
    var s3_sum = GetSSum(s3_array);

    output_string += "w(<i>&beta;</i>) = " + GetBetaChar(s1_sum) + "<br>";
    output_string += "w(<i>&beta;<sup>3</sup></i>) = " + GetBetaChar(s3_sum) + "<br>";
    output_string += "<br>";

    if (s1_sum == 0 && s3_sum == 0) {
        output_string += "s(<i>w</i>) = " + GetBetaChar(s1_sum) + ", " + GetBetaChar(s1_sum) + "<br>";
        output_string += "Word contains no errors.<br><br>"
        output_string += "e(<i>x</i>) = 0<br>";
        output_string += "v(<i>x</i>) = w(<i>x</i>)+e(<i>x</i>)<br>";
        if (polynom_array.constructor !== Array)
            output_string += "v(<i>x</i>) = " + GeneratePolynom(polynom_array) + "<br>";
        else
            output_string += "v(<i>x</i>) = " + GeneratePolynom(polynom_array.sort(function(a, b){return a-b;})) + "<br>";
    }
    else if (DimensionReminder(s1_sum * 3) == s3_sum) {
        output_string += "s(<i>w</i>) = " + GetBetaChar(s1_sum) + ", " + GetBetaChar(s3_sum) + "<br>";
        output_string += "(" + GetBetaChar(s1_sum) + ")<sup>3</sup> = " + GetBetaChar(DimensionReminder(s1_sum * 3)) + "<br>";
        output_string += "Word contains 1 error.<br><br>";
        output_string += DecodeOneError(s1_sum, s3_sum);
    }
    else {
        output_string += "(" + GetBetaChar(s1_sum) + ")<sup>3</sup> = " + GetBetaChar(DimensionReminder(s1_sum * 3)) + " &ne; " + GetBetaChar(s3_sum) + "<br>";
        output_string += "Word containts at least 2 errors.<br><br>";
        output_string += DecodeMoreErrors(s1_sum, s3_sum);
    }

    output_string += "<br>";
    output_string += "w = " + GenerateWordFromPolynom(GenerateS1Array(input)) + "<br>";
    output_string += "v = " + GenerateWordFromPolynom(polynom_array) + "<br>";

    SetOutputString(output_string);
    return;
}

function GenerateWordFromPolynom(array) {
    var word = "";

    if (array.constructor !== Array) { array = [-1]; }

    if (array.indexOf(dimension) > -1)
        word += "1";
    else
        word += "0";

    for (i = 1; i < dimension; i++) {
        if (array.indexOf(i) > -1)
            word += "1";
        else
            word += "0";

        if ((i+1) % 5 == 0)
            word += " ";
    }

    return word;
}

function DimensionReminder(num) {
    var reminder = num % dimension;
    if (reminder == 0 && num != 0) {
        reminder = dimension;
    }
    return reminder;
}

function DecodeMoreErrors (s1, s3) {
    // x^2 + s1 * x + s3 * s1^(-1) + s1^2 = 0
    var error = [];
    var beta_i_plus_j = s1;
    var beta_i_times_j = table[DimensionReminder(s3 + (dimension - s1))][DimensionReminder(s1 * 2)];

    var output = "&beta;<sup>i</sup>+&beta;<sup>j</sup> = " + GetBetaChar(beta_i_plus_j) + "<br>";
    output += "&beta;<sup>i</sup>*&beta;<sup>j</sup> = " + GetBetaChar(beta_i_times_j) + "<br><br>";

    for (i = 0; i <= dimension; i++) {
        for (j = 0; j <= dimension; j++) {
            if (table[i][j] == beta_i_plus_j && DimensionReminder(i + j) == beta_i_times_j) {
                output += "e(<i>x</i>) = x<sup>" + i + "</sup>+x<sup>" + j + "</sup><br>";
                error.push(i); error.push(j);
                i = dimension; j = dimension; // end for cycles
                break;
            }
        }
    }

    if (error.length == 0) {
        return output + "Word contains more then 2 errors.<br>";
    }
    
    var new_polynom_array = CorrectErrorInArray(CorrectErrorInArray(polynom_array, error[0]), error[1]);
    polynom_array = new_polynom_array;
    
    output += "v(<i>x</i>) = w(<i>x</i>)+e(<i>x</i>)<br>";
    output += "v(<i>x</i>) = " + GeneratePolynom(new_polynom_array) + "<br>";

    return output;
}

function CorrectErrorInArray(array, error) {
    var contains = false;
    var new_array = [];

    array.forEach(function(element) {
        if (element != error)
            new_array.push(element);
        else
            contains = true;
    }, this);

    if (!contains)
        new_array.push(error);

    if (new_array.length == 0)
        return 0;
    else
        return new_array;
}

function DecodeOneError (s1, s3) {
    var output = "e(<i>x</i>) = " + GeneratePolynom(s1) + "<br>";
    var new_polynom_array = CorrectErrorInArray(polynom_array, s1);
    polynom_array = new_polynom_array;

    output += "v(<i>x</i>) = w(<i>x</i>)+e(<i>x</i>)<br>";
    output += "v(<i>x</i>) = " + GeneratePolynom(new_polynom_array) + "<br>";

    return output;
}

function GeneratePolynom(array) {
    var output = "";
    
    if (array.constructor !== Array) {
        if (array == dimension) {output += "1+";}
        else if (array == 0) {output += "0+";}
        else if (array == 1) {output += "x+";}
        else {output += "x<sup>" + array + "</sup>+"}
    }
    else {
        array.sort(function(a, b){return a-b;});
        for (i = 0; i < array.length; i++) {
            if (array[i] == dimension) {output += "1+";}
            else if (array[i] == 1) {output += "x+";}
            else {output += "x<sup>" + array[i] + "</sup>+"}
        }
    }

    return output.substring(0, output.length - 1);
}

function GetSSum(array) {
    if (array.constructor !== Array)
        return 0;

    var result = array[0];
    for (var i = 1; i < array.length; i++){
        result = table[result][array[i]]
    }

    return DimensionReminder(result);
}

function GetBetaChar(index) {
    if (index == 0) {
        return "0";
    }
    else if (index == dimension) {
        return "1";
    }
    else if (index == 1) {
        return "&beta;"
    }
    else {
        return "&beta;<sup>" + index + "</sup>";
    }
}

function GenerateS1(input_array) {
    var output = "w(<i>&beta;</i>) = ";

    for (var i = 0; i < input_array.length; i++) {
        if (input_array[i] == 0) {
            output += "1+";
        }
        else if (input_array[i] == 15) {
            output += "&beta;+";
        }
        else {
            output += "&beta;<sup>" + input_array[i] + "</sup>+";
        }
    }

    return input_array.constructor === Array ? output.substring(0, output.length - 1) : output += "0";
}

function GenerateS1Array(input_string) {
    var output = [];

    if (input_string[0] == 1) {
        output.push(DimensionReminder(dimension));
    }

    for (var i = 1; i < input_string.length; i++) {
        if (input_string[i] == 1) {
            output.push(DimensionReminder(i));
        }
    }

    return output.length == 0 ? 0: output;
}

function GenerateS3(input_array) {
    var output = "w(<i>&beta;<sup>3</sup></i>) = ";

    for (var i = 0; i < input_array.length; i++) {
        if (input_array[i] == 0) {
            output += "1+";
        }
        else if (input_array[i] == 15) {
            output += "&beta;+";
        }
        else {
            output += "&beta;<sup>" + input_array[i] + "</sup>+";
        }
    }

    return input_array.constructor === Array ? output.substring(0, output.length - 1) : output += "0";
}

function GenerateS3Array(input_string) {
    var output = [];

    if (input_string[0] == 1) {
        output.push(DimensionReminder(dimension));
    }

    for (var i = 1; i < input_string.length; i++) {
        if (input_string[i] == 1) {
            output.push(DimensionReminder(i * 3));
        }
    }

    return output.length == 0 ? 0: output;
}

function ValidateInput(input_string) {
    var input_length = input_string.length;

    for (i = 0; i < input_length; i++) {
        if (input_string[i] != 1 && input_string[i] != 0) {
            SetOutputString("Input word contains illegal character " + input_string[i] + " at position " + i + ".");
            return false;
        }
    }

    if (input_length == 15) { table = table_b15; dimension = 15; return true; } 
    else if (input_length == 31) { table = table_b31; dimension = 31; return true; }
    else { 
        SetOutputString("Input word has incorrect lenght.");
        return false; 
    }
}

function DisplayLength() {
    SetOutputString(document.getElementById("input_field").value.length);
}

function SetOutputString(string) {
    document.getElementById("output_string").innerHTML = string;
}