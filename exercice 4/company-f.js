function create(event) {
    event.preventDefault();
    let nom = document.getElementById("companyName");
    let address = document.getElementById("address");
    let email = document.getElementById("email");

    let city = document.getElementById("city");
    var Msg1 = document.getElementById('eml');
    let validation = true;
    if (nom.value == "") {
        nom.classList.add("is-invalid");
        nom.classList.remove("is-valid");
        validation = false;
    }
    else {
        nom.classList.add("is-valid");
        nom.classList.remove("is-invalid");
    }

    if (address.value == "") {
        address.classList.add("is-invalid");
        address.classList.remove("is-valid");
        validation = false;
    }
    else {
        address.classList.add("is-valid");
        address.classList.remove("is-invalid");
    }

    if (email.value === '') {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        Msg1.innerHTML = "Ce champ est obligatoire.";
        validation = false;
    } else {
        var Em = email.value;
        const regx1 = /^\S+@\S+\.\S+$/;

        if (regx1.test(Em) === false) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            Msg1.innerHTML = "L'adresse e-mail est invalid.";
            check = false;
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
        }
    }

    if (validation == true) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let id = Math.random().toString(36).substring(2);
        const user = {
            id: id,
            nom: nom.value,
            address: address.value,
            email: email.value
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.open("company-L.html", "_blank")
    }
}