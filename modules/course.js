export default class Course {
    constructor(courseData) {
        this.name = courseData.name;
        this.duration = courseData.duration;
        this.fee = courseData.fee;
        this.students = courseData.students;
        this.hod = courseData.hod;
    }

    displayDetails() {
        console.log(`Course: ${this.name}`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Fee: ${this.fee}`);
        console.log(`Students: ${this.students}`);
        console.log(`HOD: ${this.hod}`);
    }
}

