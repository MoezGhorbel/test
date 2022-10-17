let users = JSON.parse(localStorage.getItem("users")) || [];
function affichage() {
    let list = ``;
    let i = 1;
    users.forEach(element => {
        list += `
        <tr>
        <th>${i}</th>
        <th>${element.nom}</th>
        <th>${element.address}</th>
        <th>${element.email}</th>
        <th><button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">update</button></th>
        <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i - 1})">delete</button></th>
    </tr>
`
    
        i++;
    });
    document.getElementById("table").innerHTML = list;
}
function deleteItem(x) {
    users.splice(x, 1);
    localStorage.setItem("users", JSON.stringify(users));
    affichage();
}
let id;
function updateItem(x) {
    console.log(x);
    let user = users.find(y => y.id == x);

    document.getElementById("companyName").value = user.nom;
    document.getElementById("address").value = user.address;
    document.getElementById("email").value = user.email;
    id=x;
}
function save(){
    let user = users.find(y => y.id == id);
     user.nom = document.getElementById("companyName").value;
     user.address =  document.getElementById("address").value ;
     user.email =document.getElementById("email").value ;
    localStorage.setItem("users", JSON.stringify(users));
   window.location.reload();
}