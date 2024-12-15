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
        try {
            if (typeof threshold !== 'number') {
                throw new Error('Threshold should be a number');
            }
            if (this.studentsCount > threshold) {
                console.log(`Students count (${this.studentsCount}) is above the threshold (${threshold})`);
            } else if (this.studentsCount === threshold) {
                console.log(`Students count (${this.studentsCount}) is exactly the threshold (${threshold})`);
            } else {
                console.log(`Students count (${this.studentsCount}) is below the threshold (${threshold})`);
            }
        } catch (error) {
            console.error(`Error in checkStudentsThreshold: ${error.message}`);
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

    calculateTotalFee = () => {
        try {
            if (!Array.isArray(this.courses)) {
                throw new Error('Courses should be an array');
            }
            return Object.values(this.courses).reduce((total, course) => total + course.fee, 0);
        } catch (error) {
            console.error(`Error in calculateTotalFee: ${error.message}`);
            return 0;
        }
    };

    isCourseAvailable = (courseName) => {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return courseName in this.courses;
        } catch (error) {
            console.error(`Error in isCourseAvailable: ${error.message}`);
            return false;
        }
    };

    getHOD = (courseName) => {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return this.courses[courseName]?.hod || 'Course not found';
        } catch (error) {
            console.error(`Error in getHOD: ${error.message}`);
            return 'Error retrieving HOD';
        }
    };

    displayAllCourses = () => {
        try {
            Object.values(this.courses).forEach(course => course.displayDetails());
        } catch (error) {
            console.error(`Error in displayAllCourses: ${error.message}`);
        }
    };

    findCourse = (courseName) => {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return this.courses[courseName] 
                ? `Course found: ${this.courses[courseName].name} with ${this.courses[courseName].students} students` 
                : 'Course not found';
        } catch (error) {
            console.error(`Error in findCourse: ${error.message}`);
            return 'Error finding course';
        }
    };

    addCourse = (newCourse) => {
        try {
            if (!(newCourse instanceof Course)) {
                throw new Error('Provided object is not a valid Course');
            }
            this.courses[newCourse.name] = newCourse;
            return `Course ${newCourse.name} added with ${newCourse.students} students`;
        } catch (error) {
            console.error(`Error in addCourse: ${error.message}`);
            return 'Error adding course';
        }
    }
}

// DOM Manipulation with Error Handling
const headerImage = document.getElementById('headerImage');
if (headerImage) {
    headerImage.addEventListener('click', () => alert('Header image clicked!'));
} else {
    console.error('Header image element not found');
}

const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const [firstNameInput, middleNameInput, lastNameInput] = ['firstName', 'middleName', 'lastName'].map(id => document.getElementById(id));
            if (firstNameInput && middleNameInput && lastNameInput) {
                console.log(`Submitted: ${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value}`);
            } else {
                throw new Error('One or more form inputs not found');
            }
        } catch (error) {
            console.error(`Error in form submission: ${error.message}`);
        }
    });
} else {
    console.error('Form element not found');
}

const usernameInput = document.getElementById('usernameInput');
if (usernameInput) {
    usernameInput.addEventListener('focus', () => console.log('Username input focused.'));
} else {
    console.error('Username input not found');
}

const passwordInput = document.getElementById('passwordInput');
if (passwordInput) {
    passwordInput.addEventListener('blur', () => console.log('Password input blurred.'));
} else {
    console.error('Password input not found');
}

const coursesList = document.getElementById('coursesList');
if (coursesList) {
    coursesList.addEventListener('mouseover', () => console.log('Hovered over the courses list.'));
} else {
    console.error('Courses list not found');
}

// Course Table Row Insertion with Error Handling
const addCourseRow = (courseName, studentCount) => {
    const coursesTable = document.getElementById('coursesTable');
    if (coursesTable) {
        try {
            const newRow = coursesTable.insertRow();
            const [courseCell, studentCell] = [newRow.insertCell(0), newRow.insertCell(1)];
            courseCell.textContent = courseName;
            studentCell.textContent = studentCount;
        } catch (error) {
            console.error(`Error adding course row: ${error.message}`);
        }
    } else {
        console.error('Courses table not found');
    }
};

// JSON Operations with Error Handling
const getCourseDetailsAsJSON = (courseName) => {
    try {
        if (!(courseName in courses)) {
            throw new Error('Course not found');
        }
        return JSON.stringify(courses[courseName]);
    } catch (error) {
        console.error(`Error in getCourseDetailsAsJSON: ${error.message}`);
        return '{}'; // Returning empty JSON in case of error
    }
};

const loadCourseDetailsFromJSON = (jsonString) => {
    try {
        const course = JSON.parse(jsonString);
        if (course.name && course.duration && course.fee) {
            courses[course.name.replace(/\./g, '')] = course;
            return `Course ${course.name} loaded from JSON`;
        } else {
            throw new Error('Invalid course data');
        }
    } catch (error) {
        console.error(`Error in loadCourseDetailsFromJSON: ${error.message}`);
        return 'Invalid course JSON data';
    }
};

// Fetch Course Details with Error Handling
const fetchCourseDetails = (courseName) => {
    return fetch(`https://example.com/api/courses/${courseName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch course details: ${response.statusText}`);
            }
            return response.json();
        })
        .then(course => {
            console.log(`Course loaded: ${course.name}`);
        })
        .catch(error => {
            console.error(`Error fetching course details: ${error.message}`);
        });
};

// Example Usage
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

addCourseRow('New Course', 100);

const courseJson = getCourseDetailsAsJSON('BTech');
console.log(`Course JSON: ${courseJson}`);
console.log(loadCourseDetailsFromJSON(courseJson));

fetchCourseDetails('BTech')
    .then(course => console.log(`Course loaded: ${course.name}`))
    .catch(error => console.error(`Failed to fetch course details: ${error.message}`));
