
var form = document.getElementById("userForm");
var container = document.getElementById("usersContainer");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("username").value;
    var userEmail = document.getElementById("email").value;

    var userDiv = document.createElement("div");

    userDiv.classList.add("alert", "alert-primary", "mt-3");

    var nameElement = document.createElement("h3");
    var emailElement = document.createElement("h4");

    nameElement.innerText = name;
    emailElement.innerText = userEmail;

    userDiv.appendChild(nameElement);
    userDiv.appendChild(emailElement);

    container.appendChild(userDiv);

});
