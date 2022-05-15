var button1 = document.getElementById("createbtn");
var text = document.getElementById("inputValue");
var cancelbtn = document.getElementById("cancelbtn");
button1.classList.add("disabled");
button1.disabled = true;
button1.addEventListener("click",function(event){
    toastr.success(text.value + " has been created","Success");
    text.value = "";
    button1.disabled = true;
    button1.classList.add("disabled");
})
cancelbtn.addEventListener("click",function(event){
    text.value = "";
    button1.disabled = true;
    button1.classList.add("disabled");
})
function buttonHandle(inputValue) {
    if(text.value.trim() != ""){
        button1.classList.remove("disabled");
        button1.disabled = false;
    }else{
        //button1.disabled = true;
        button1.classList.add("disabled");
    }
}
