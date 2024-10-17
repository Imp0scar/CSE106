from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///studentgrades.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Students(db.Model):
    name = db.Column(db.String, primary_key=True)
    grade = db.Column(db.String, nullable=False)

    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

@app.route('/grades', methods=['GET'])
def getAllGrades():
    students = Students.query.all()
    grades = {student.name: student.grade for student in students}
    return jsonify(grades)

@app.route('/grades/<student>', methods=['GET'])
def getStudentGrades(student):
    person = Students.query.filter_by(name=student).first()
    if person:
        return jsonify({person.name: person.grade})
    else:
        return "Student not found", 404

@app.route('/newStudent', methods=['POST'])
def newStudent():
    data = request.get_json()
    name = data.get('name')
    grade = data.get('grade')
    newPerson = Students(name=name, grade=grade)
    db.session.add(newPerson)
    db.session.commit()
    return jsonify({newPerson.name: newPerson.grade})

@app.route('/editGrades/<student>', methods=['PUT'])
def editGrades(student):
    data = request.get_json()
    new_grade = data.get('grade')
    person = Students.query.filter_by(name=student).first()
    if person:
        person.grade = new_grade
        db.session.commit()
        return jsonify({person.name: person.grade})
    else:
        return "Student not found", 404

@app.route('/delStudent/<student>', methods=['DELETE'])
def delStudent(student):
    person = Students.query.filter_by(name=student).first()
    if person:
        db.session.delete(person)
        db.session.commit()
        return jsonify({person.name: person.grade})
    else:
        return "Student not found", 404

@app.route('/')
def index():
    students = Students.query.all()
    return render_template("grades.html", results=students)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()

