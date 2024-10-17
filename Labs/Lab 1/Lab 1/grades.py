import json

# Function to load grade data from grades.txt
def load_grades():
    with open("C:\CSE106\Labs\Lab 1\Lab 1\grades.txt", "r") as file:
        grade_data = json.load(file)
    return grade_data

# Function to save grade data to grades.txt
def save_grades(grade_data):
    with open("C:\CSE106\Labs\Lab 1\Lab 1\grades.txt", "w") as file:
        json.dump(grade_data, file, indent=4)

# Function to create a student and their grade
def create_grade(grade_data, student_name, student_grade):
    try:
        float_grade = float(student_grade)
        grade_data[student_name] = float_grade
        save_grades(grade_data)
        print(f"Grade for {student_name} has been added.")
    except ValueError:
        print("Please enter a valid number")

# Function to get a grade given the full name of the student
def get_grade(grade_data, student_name):
    if student_name in grade_data:
        return grade_data[student_name]
    else:
        return "Student not found."

# Function to edit a grade
def edit_grade(grade_data, student_name, new_grade):
    try:
        if student_name in grade_data:
            float_grade = float(new_grade)
            grade_data[student_name] = float_grade
            save_grades(grade_data)
            print(f"Grade for {student_name} has been updated.")
        else:
            print("Student not found.")
    except ValueError:
        print("Please enter a valid number")

# Function to delete a grade
def delete_grade(grade_data, student_name):
    if student_name in grade_data:
        del grade_data[student_name]
        save_grades(grade_data)
        print(f"Grade for {student_name} has been deleted.")
    else:
        print("Student not found.")

def main():
    grade_data = load_grades()

    while True:
        print("\n1.) Create a grade")
        print("2.) Get a grade")
        print("3.) Edit a grade")
        print("4.) Delete a grade")
        print("5.) Quit\n")
        
        option = input("Enter your choice: ")
        
        if option == "1":
            student_name = input("Enter student name: ")
            student_grade = input("Enter student grade: ")
            create_grade(grade_data, student_name, student_grade)
        elif option == "2":
            student_name = input("Enter student name: ")
            grade = get_grade(grade_data, student_name)
            print(f"Grade for {student_name}: {grade}")
        elif option == "3":
            student_name = input("Enter student name: ")
            new_grade = input("Enter new grade: ")
            edit_grade(grade_data, student_name, new_grade)
        elif option == "4":
            student_name = input("Enter student name: ")
            delete_grade(grade_data, student_name)
        elif option == "5":
            break
        else:
            print("Error, select one of the options provided.")

if __name__ == "__main__":
    main()
