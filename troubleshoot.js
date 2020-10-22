var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = ""; //declares stringOutput initial value to be blank
    
    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    /* Need to be careful here when defining our boolean variables for use in the troubleshooting chart
     * and what you define as true or false.  For example, in the chart used in this problem,
     * a combination of Y-Y-Y results in messages 2, 3, & 4 being provided
     * to the user.  In this case, Y-Y-Y means
     * "the printer does NOT print"  AND "a red light is flashing" AND "the printer is unrecognized"
     */
    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

    //enter your code here and don't forget to send the output to the DOM

if (boolPrinting === true)
{    
    if (boolRedLight === true)
    {
        if (boolRecognised === true)
        {
            stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4; //Print = T; Redlight = T; Recognise = T
        }
        else
        {
            stringOutput = stringMessage4 + "\n" + stringMessage5; //Print = T; Redlight = T; Recognise = F
        }
    }
    else if (boolRecognised === true)
    {
        stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3; //Print = T; Redlight = F; Recognise = T
    }
        else
            {
                stringOutput = stringMessage5; //Print = T; Redlight = F; Recognise = F
            }
}
else
{
if (boolRedLight === true)
    {
        if (boolRecognised === true)
        {
            stringOutput = stringMessage3 + "\n" + stringMessage4; //Print = F; Redlight = T; Recognise = F
        }
        else
        {
            stringOutput = stringMesssage4; //Print = F; Redlight = T; Recognise = F
        }
    }
    else if (boolRecognised === true)
    {
        stringOutput = stringMessage3; //Print = F; Redlight = F; Recognise = T
    }
    else
    {
        stringOutput = stringMessage6; //Print = F; Redlight = F; Recognise = F
    }
}
$("output").value = stringOutput;
};
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};

