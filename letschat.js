function addUser(){
    if(document.getElementById("username").value !== ""){
        username = document.getElementById("username").value;
        localStorage.setItem("username",username);
        window.location = "lets_chat.html";
    }
    else{
        document.getElementById("username").placeholder = "Name cannot be blank";
    }
}

