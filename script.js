let students = [];

function add() {
    let name = document.getElementById("student").value;
    students.push(name);
    document.getElementById("list").innerHTML += name + "<br>";
}

function search() {
    let name = document.getElementById("search").value;

    if (students.includes(name))
        alert("Found");
    else
        alert("Not Found");
}