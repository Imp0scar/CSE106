const apiURL = 'http://127.0.0.1:5000';
const xhr = new XMLHttpRequest();

function getAllGrades() {
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

    xhr.open("POST", apiURL + "/grades");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    const body = {"name": name, "grade": grade};
    xhr.send(JSON.stringify(body));
}

function editGrades() {
    const name = document.getElementById("studentName").value;
    const newGrade = document.getElementById("grade").value;

    xhr.open("PUT", apiURL + "/grades/" + name);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    const body = {"grade": newGrade};
    xhr.send(JSON.stringify(body));
}

function delStudent() {
    const name = document.getElementById("removeStudentName").value;

    xhr.open("DELETE", apiURL + "/grades/" + name);

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("demo").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}
