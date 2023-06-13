function deleteMe(){
    document.getElementById('value').value = ""
}

function calculation(newValue){
    document.getElementById('value').value += newValue;
}

function answer(){
    let result = eval(document.getElementById('value').value);
    document.getElementById('value').value = result;
}

