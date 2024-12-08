document.getElementById('Form').addEventListener('submit',function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const age = document.getElementById('age').value;
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const formData = {
        email: email,
        number: number,
        age: age,
        user: user,
        pass: document.getElementById('pass').value,
    }
    if (!email){
        alert("Email required!");
        return;
    }
    if (!number){
        alert("Phone Number required!");
        return;
    }
    if (!age){
        alert("Age is required");
        return;
    }
    if (age < 18){
        alert("You must be 18 or over to register");
        return;
    }
    if(!user){
        alert("Username required")
        return
    }
    if (!pass){
        alert("Password required!")
        return;
    }
    if(pass.length < 8){
        alert("Password must be more than 8 characters long!")
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message
            document.getElementById("Form").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting the form.');
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
})