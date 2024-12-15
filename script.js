class University {
    constructor(name, studentsCount, isCollegeOpen) {
        this.name = name;
        this.studentsCount = studentsCount;
        this.isCollegeOpen = isCollegeOpen;
    }

    displayInfo = () => {
        console.log(`Welcome to ${this.name}`);
        console.log(`Total Students: ${this.studentsCount}`);
        console.log(`College Open: ${this.isCollegeOpen}`);
    }

    checkStudentsThreshold = (threshold) => {
        if (this.studentsCount > threshold) {
            console.log(`Students count (${this.studentsCount}) is above the threshold (${threshold})`);
        } else if (this.studentsCount === threshold) {
            console.log(`Students count (${this.studentsCount}) is exactly the threshold (${threshold})`);
        } else {
            console.log(`Students count (${this.studentsCount}) is below the threshold (${threshold})`);
        }
    }
}

class Course {
    constructor(name, duration, fee, students, hod) {
        this.name = name;
        this.duration = duration;
        this.fee = fee;
        this.students = students;
        this.hod = hod;
    }

    displayDetails = () => {
        console.log(`Course: ${this.name}`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Fee: ${this.fee}`);
        console.log(`Students: ${this.students}`);
        console.log(`HOD: ${this.hod}`);
    }
}

class CourseManager {
    constructor(courses) {
        this.courses = courses;
    }

    calculateTotalFee = () => Object.values(this.courses).reduce((total, course) => total + course.fee, 0);

    isCourseAvailable = (courseName) => courseName in this.courses;

    getHOD = (courseName) => this.courses[courseName]?.hod || "Course not found";

    displayAllCourses = () => {
        Object.values(this.courses).forEach(course => course.displayDetails());
    }

    findCourse = (courseName) => this.courses[courseName] 
        ? `Course found: ${this.courses[courseName].name} with ${this.courses[courseName].students} students` 
        : "Course not found";

    addCourse = (newCourse) => {
        this.courses[newCourse.name] = newCourse;
        return `Course ${newCourse.name} added with ${newCourse.students} students`;
    }
}

const university = new University("Future University", 1500, true);

const courses = {
    BTech: new Course("B.Tech", "4 Years", 70000, 1500, "Dr. Abhishek Saxena"),
    BCA: new Course("B.C.A", "3 Years", 35000, 700, "Mr. Sachin Raj Saxena"),
    MCA: new Course("M.C.A", "2 Years", 45000, 650, "Mr. Sachin Raj Saxena"),
    BPharma: new Course("B.Pharma", "4 Years", 110000, 1800, "Dr. Rahul Shukla"),
    MBA: new Course("MBA", "2 Years", 50000, 500, "Mr. Virendra"),
};

const courseManager = new CourseManager(courses);

university.displayInfo();
courseManager.courses.BTech.displayDetails();
console.log(`Total Fee of all courses: ${courseManager.calculateTotalFee()}`);
console.log(`Is B.C.A available?: ${courseManager.isCourseAvailable("BCA")}`);
console.log(`Head of B.C.A department: ${courseManager.getHOD("BCA")}`);
courseManager.displayAllCourses();
university.checkStudentsThreshold(1000);

document.getElementById('headerImage')?.addEventListener('click', () => alert('Header image clicked!'));

document.getElementById('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const [firstNameInput, middleNameInput, lastNameInput] = ['firstName', 'middleName', 'lastName'].map(id => document.getElementById(id));
    console.log(`Submitted: ${firstNameInput?.value} ${middleNameInput?.value} ${lastNameInput?.value}`);
});

document.getElementById('usernameInput')?.addEventListener('focus', () => console.log('Username input focused.'));
document.getElementById('passwordInput')?.addEventListener('blur', () => console.log('Password input blurred.'));
document.getElementById('coursesList')?.addEventListener('mouseover', () => console.log('Hovered over the courses list.'));

const updateWelcomeMessage = () => {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) welcomeElement.textContent = 'Welcome to our University Portal';
};

const populateCoursesList = () => {
    const coursesList = document.getElementById('coursesList');
    if (coursesList) {
        coursesList.innerHTML = '';
        Object.keys(courses).forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            coursesList.appendChild(listItem);
        });
    }
};

const addCourseRow = (courseName, studentCount) => {
    const coursesTable = document.getElementById('coursesTable');
    if (coursesTable) {
        const newRow = coursesTable.insertRow();
        const [courseCell, studentCell] = [newRow.insertCell(0), newRow.insertCell(1)];
        courseCell.textContent = courseName;
        studentCell.textContent = studentCount;
    }
};

updateWelcomeMessage();
populateCoursesList();
addCourseRow('New Course', 100);

const getCourseDetailsAsJSON = (courseName) => JSON.stringify(courses[courseName]);

const loadCourseDetailsFromJSON = (jsonString) => {
    const course = JSON.parse(jsonString);
    if (course.name) {
        courses[course.name.replace(/\./g, '')] = course;
        return `Course ${course.name} loaded from JSON`;
    }
    return 'Invalid course JSON data';
};

const fetchCourseDetails = (courseName) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://example.com/api/courses/${courseName}`, true);
    xhr.onload = () => xhr.status === 200 
        ? resolve(JSON.parse(xhr.responseText)) 
        : reject(`Failed to fetch course details: ${xhr.statusText}`);
    xhr.onerror = () => reject('Error during AJAX request');
    xhr.send();
});

const courseJson = getCourseDetailsAsJSON('BTech');
console.log(`Course JSON: ${courseJson}`);
console.log(loadCourseDetailsFromJSON(courseJson));

fetchCourseDetails('BTech')
    .then(course => console.log(`Course loaded: ${course.name}`))
    .catch(error => console.log(error));
