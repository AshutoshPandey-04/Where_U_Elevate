const defaultData = {
    university: {
        name: "Future University",
        studentsCount: 1500,
        isCollegeOpen: true,
    },
    courses: {
        BTech: {
            name: "B.Tech",
            duration: "4 Years",
            fee: 70000,
            students: 1500,
            hod: "Dr. Abhishek Saxena",
        },
        BCA: {
            name: "B.C.A",
            duration: "3 Years",
            fee: 35000,
            students: 700,
            hod: "Mr. Sachin Raj Saxena",
        },
        MCA: {
            name: "M.C.A",
            duration: "2 Years",
            fee: 45000,
            students: 650,
            hod: "Mr. Sachin Raj Saxena",
        },
        BPharma: {
            name: "B.Pharma",
            duration: "4 Years",
            fee: 110000,
            students: 1800,
            hod: "Dr. Rahul Shukla",
        },
        MBA: {
            name: "MBA",
            duration: "2 Years",
            fee: 50000,
            students: 500,
            hod: "Mr. Virendra",
        }
    }
};

const loadData = () => {
    const storedData = localStorage.getItem('universityData');
    if (storedData) {
        return JSON.parse(storedData); 
    }
    return defaultData;
};

const saveData = (data) => {
    localStorage.setItem('universityData', JSON.stringify(data));  
};

class University {
    constructor(data) {
        this.name = data.university.name;
        this.studentsCount = data.university.studentsCount;
        this.isCollegeOpen = data.university.isCollegeOpen;
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
    constructor(courseData) {
        this.name = courseData.name;
        this.duration = courseData.duration;
        this.fee = courseData.fee;
        this.students = courseData.students;
        this.hod = courseData.hod;
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
    constructor(coursesData) {
        this.courses = Object.keys(coursesData).reduce((acc, courseName) => {
            acc[courseName] = new Course(coursesData[courseName]);
            return acc;
        }, {});
    }

    calculateTotalFee = () => {
        try {
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

    addCourse = (newCourseData) => {
        try {
            const newCourse = new Course(newCourseData);
            this.courses[newCourse.name] = newCourse;
            saveData({ ...loadData(), courses: this.courses });  // Save the updated data to localStorage
            return `Course ${newCourse.name} added with ${newCourse.students} students`;
        } catch (error) {
            console.error(`Error in addCourse: ${error.message}`);
            return 'Error adding course';
        }
    }
}

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

const data = loadData(); 
const university = new University(data);
const courseManager = new CourseManager(data.courses);

university.displayInfo();
courseManager.courses.BTech.displayDetails();
console.log(`Total Fee of all courses: ${courseManager.calculateTotalFee()}`);
console.log(`Is B.C.A available?: ${courseManager.isCourseAvailable("BCA")}`);
console.log(`Head of B.C.A department: ${courseManager.getHOD("BCA")}`);
courseManager.displayAllCourses();
university.checkStudentsThreshold(1000);

const newCourseData = {
    name: 'MTech',
    duration: '2 Years',
    fee: 90000,
    students: 400,
    hod: 'Dr. Sharma'
};
console.log(courseManager.addCourse(newCourseData));

addCourseRow('New Course', 100);
