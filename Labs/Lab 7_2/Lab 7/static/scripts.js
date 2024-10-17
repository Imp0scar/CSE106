const apiURL = 'http://127.0.0.1:5000';

function getAllGrades() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", apiURL + "/grades", true);
    xhr.send();
}

function getStudentGrades() {
    const name = document.getElementById("studentName").value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", apiURL + "/grades/" + name, true);
    xhr.send();
}

function newStudent() {
    const name = document.getElementById("newStudentName").value;
    const grade = document.getElementById("newStudentGrade").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", apiURL + "/newStudent");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    const body = JSON.stringify({ name: name, grade: grade });
    xhr.send(body);
}

function editGrades() {
    const name = document.getElementById("studentNames").value;
    const newGrade = document.getElementById("grade").value;

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", apiURL + "/editGrades/" + name);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    const body = JSON.stringify({ grade: newGrade });
    xhr.send(body);
}

function delStudent() {
    const name = document.getElementById("removeStudentName").value;

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiURL + "/delStudent/" + name);

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}
