document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const password = document.getElementById('pword').value;
    const formData = {
        firstName: firstName,
        lastName: lastName,
        password: document.getElementById('pword').value,
    }
    if (!firstName || !lastName){
        alert("First name and last name required!");
        return;
    }
    if (!password){
        alert("Password required!")
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "sumbit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response =  JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error sumbitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
})