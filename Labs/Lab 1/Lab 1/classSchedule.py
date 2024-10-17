class Course:
    def __init__(self, department, number, name, credits, days, start_time, end_time, avg_grade):
        self.department = department
        self.number = number
        self.name = name
        self.credits = credits
        self.days = days
        self.start_time = start_time
        self.end_time = end_time
        self.avg_grade = avg_grade

    def format(self):
        formatted_course = f"COURSE {self.number}: {self.department}{self.number}: {self.name}\n"
        formatted_course += f"Number of Credits: {self.credits}\n"
        formatted_course += f"Days of Lectures: {self.days}\n"
        formatted_course += f"Lecture Time: {self.start_time} - {self.end_time}\n"
        formatted_course += f"Stat: on average, students get {self.avg_grade}% in this course\n"
        return formatted_course

class Schedule:
    def __init__(self):
        self.courses = []

    def add_course(self, course):
        self.courses.append(course)

    def format_schedule(self):
        formatted_schedule = ""
        course_number = 1
        for course in self.courses:
            formatted_schedule += course.format()
            if course_number < len(self.courses):
                formatted_schedule += "\n"
            course_number += 1
        return formatted_schedule

def main():
    schedule = Schedule()

    with open('C:/CSE106/Labs/Lab 1/Lab 1/classesInput.txt', 'r') as file:
        num_courses = int(file.readline())
        for _ in range(num_courses):
            department = file.readline().strip()
            number = file.readline().strip()
            name = file.readline().strip()
            credits = int(file.readline().strip())
            days = file.readline().strip()
            start_time = file.readline().strip()
            end_time = file.readline().strip()
            avg_grade = int(file.readline().strip())

            course = Course(department, number, name, credits, days, start_time, end_time, avg_grade)
            schedule.add_course(course)

    formatted_schedule = schedule.format_schedule()
    print(formatted_schedule)

if __name__ == "__main__":
    main()
