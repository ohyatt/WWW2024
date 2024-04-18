let waitingTime = 5000;

function greetUser(){
    setTimeout( () => {
        var username = document.getElementById("name").value;
        alert("Hello, " + username);
    }
        ,waitingTime);
    
}