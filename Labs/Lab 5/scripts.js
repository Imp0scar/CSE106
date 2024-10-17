const apiURL = 'https://amhep.pythonanywhere.com';
const xhr = new XMLHttpRequest();

function getAllGrades() {
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("grades").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", apiURL + "/grades", true);
    xhr.send();
}

function getStudentGrades() {
    const name = document.getElementById("text1").value;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("studentGrades").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", apiURL + "/grades/" + name, true);
    xhr.send();
}

function newStudentGrade() {
    const name = document.getElementById("text2").value;
    const grade = document.getElementById("text3").value;
    
    xhr.open("POST", apiURL + "/grades");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("newStudentGrade").innerHTML = xhr.responseText;
        }
    };

    const body = {"name": name, "grade": grade};
    xhr.send(JSON.stringify(body));
}

function changeGrade() {
    const name = document.getElementById("text4").value;
    const newGrade = document.getElementById("text5").value;

    xhr.open("PUT", apiURL + "/grades/" + name);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("newGrade").innerHTML = xhr.responseText;
        }
    };

    const body = {"grade": newGrade};
    xhr.send(JSON.stringify(body));
}

function deleteStudentGrade() {
    const name = document.getElementById("text6").value;
    
    xhr.open("DELETE", apiURL + "/grades/" + name);

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("deleteStudentGrade").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

