const emailBox = document.getElementById("email");
const passBox = document.getElementById("password");
const button = document.getElementById("button");
const email = emailBox.value;
const password = passBox.value;

console.log(email,password);
function check(){
    const email = emailBox.value;
    const password = passBox.value;
    if(email.length>0){
        button.disabled = true;
    }
}