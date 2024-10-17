from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)


# Load initial data from the JSON file
with open("Grades.json", "r") as f:
    gradesdict = json.load(f)

# Function to write data back to the JSON file
def writeJson():
    with open('Grades.json', 'w') as f:
        json.dump(gradesdict, f)

@app.route('/grades', methods=['GET'])
def getAllGrades():
    return jsonify(gradesdict)

@app.route('/grades/<student>', methods=['GET'])
def getStudentGrades(student):
    return jsonify(gradesdict.get(student, "Student not found"))

@app.route('/grades', methods=['POST'])
def newStudent():
    data = request.get_json()
    name = data.get("name")
    grade = data.get("grade")
    gradesdict[name] = grade
    writeJson()
    return jsonify(gradesdict)

@app.route('/grades/<student>', methods=['PUT'])
def editGrades(student):
    data = request.get_json()
    new_grade = data.get("grade")
    gradesdict[student] = new_grade
    writeJson()
    return jsonify(gradesdict)

@app.route('/grades/<student>', methods=['DELETE'])
def delStudent(student):
    if student in gradesdict:
        del gradesdict[student]
        writeJson()
    return jsonify(gradesdict)

@app.route('/')
def index():
    return render_template("grades.html", results=gradesdict)

if __name__ == '__main__':
    app.run(debug=True)

