// text-input to float
function textValue(elementId){
    const preinput = document.getElementById(elementId);
    const inputtext = preinput.innerText;
    const textinputfloat = parseFloat(inputtext);
    return textinputfloat;
}

//value input to float
function inputValue(elementId){
    const preinput = document.getElementById(elementId);
    const inputValue = preinput.value;
    const valueinputfloat = parseFloat(inputValue);
    preinput.value = '' ;
    if(isNaN(valueinputfloat))
        {alert('Wrong Input');
            preinput.value = '' ;
            return 0;
        }
    return valueinputfloat;
}

//set the values
function setValue(elementId,setin){
    const textset = document.getElementById(elementId);
    textset.innerText = setin;
    //return 
}
