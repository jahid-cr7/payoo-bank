function getvalueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;

}
function setInnerTextByID(id, value){
    document.getElementById(id).innerText = value;
}

function toggleDisplay(id, status) {
    document.getElementById(id).style.display = status;
  }
  

