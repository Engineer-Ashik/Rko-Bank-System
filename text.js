document.getElementById('bold').addEventListener('click',function(){
    const inputText = document.getElementById('input-text');
    const inputTextValue = inputText.innerText;
    inputTextValue.style.fontWeight = "bold";
})