const contentContainer = document.querySelector('.content');
const headerImage = document.querySelector('.header-image');
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#fname');
const middleNameInput = document.querySelector('#mname');
const lastNameInput = document.querySelector('#lname');
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector('input[type="submit"]');
const coursesList = document.querySelector('.c');
const coursesTable = document.querySelector('table');

const universityName = "Future University";
let studentsCount = 1500;
const isCollegeOpen = true;

const courseNames = ["B.Tech", "B.C.A", "M.C.A", "B.Pharma", "MBA"];
const studentsCounts = [1500, 700, 650, 1800, 500];

const courseDetails = {
    BTech: {
        name: "B.Tech",
        duration: "4 Years",
        fee: 70000,
        students: 1500,
        hod: "Dr. Abhishek Saxena"
    },
    BCA: {
        name: "B.C.A",
        duration: "3 Years",
        fee: 35000,
        students: 700,
        hod: "Mr. Sachin Raj Saxena"
    },
    MCA: {
        name: "M.C.A",
        duration: "2 Years",
        fee: 45000,
        students: 650,
        hod: "Mr. Sachin Raj Saxena"
    },
    BPharma: {
        name: "B.Pharma",
        duration: "4 Years",
        fee: 110000,
        students: 1800,
        hod: "Dr. Rahul Shukla"
    },
    MBA: {
        name: "MBA",
        duration: "2 Years",
        fee: 50000,
        students: 500,
        hod: "Mr. Virendra"
    }
};

let notAssigned = null;
let unassignedVariable = undefined;

let totalFees = courseDetails.BTech.fee + courseDetails.BCA.fee; 
totalFees -= 10000; 
totalFees *= 2; 
totalFees /= 4; 
let remainder = totalFees % 3; 

let isMoreExpensive = courseDetails.BPharma.fee > courseDetails.BCA.fee; 
let isEqualFee = courseDetails.BTech.fee == courseDetails.MCA?.fee; 

let areBothAvailable = isCollegeOpen && (studentsCount > 1000); 
let isAnyAvailable = isCollegeOpen || (studentsCount > 2000); 
let isNotAvailable = !isCollegeOpen; 

studentsCount += 500; 
studentsCount -= 200; 
studentsCount *= 2; 
studentsCount /= 4; 

let welcomeMessage = "Welcome to " + universityName; 

function displayUniversityInfo() {
    console.log(`Welcome to ${universityName}`);
    console.log(`Total Students: ${studentsCount}`);
    console.log(`College Open: ${isCollegeOpen}`);
}

function displayCourseDetails(course) {
    const details = courseDetails[course];
    console.log(`Course: ${details.name}`);
    console.log(`Duration: ${details.duration}`);
    console.log(`Fee: ${details.fee}`);
    console.log(`Students: ${details.students}`);
    console.log(`HOD: ${details.hod}`);
}

function calculateTotalFee() {
    let totalFee = 0;
    for (let course in courseDetails) {
        totalFee += courseDetails[course].fee;
    }
    return totalFee;
}

function isCourseAvailable(courseName) {
    return courseNames.includes(courseName);
}

function getHOD(courseName) {
    if (courseDetails[courseName]) {
        return courseDetails[courseName].hod;
    }
    return "Course not found";
}

function displayAllCourses() {
    for (let i = 0; i < courseNames.length; i++) {
        console.log(`Course: ${courseNames[i]}, Students: ${studentsCounts[i]}`);
    }
}

function checkStudentsThreshold(threshold) {
    if (studentsCount > threshold) {
        console.log(`Students count (${studentsCount}) is above the threshold (${threshold})`);
    } else if (studentsCount === threshold) {
        console.log(`Students count (${studentsCount}) is exactly the threshold (${threshold})`);
    } else {
        console.log(`Students count (${studentsCount}) is below the threshold (${threshold})`);
    }
}

function getTotalStudents() {
    return studentsCounts.reduce((total, count) => total + count, 0);
}

function findCourse(courseName) {
    const index = courseNames.indexOf(courseName);
    if (index !== -1) {
        return `Course found: ${courseNames[index]} with ${studentsCounts[index]} students`;
    }
    return "Course not found";
}

function addCourse(newCourseName, studentCount) {
    courseNames.push(newCourseName);
    studentsCounts.push(studentCount);
    return `Course ${newCourseName} added with ${studentCount} students`;
}

displayUniversityInfo();
displayCourseDetails("BTech");
console.log(`Total Fee of all courses: ${calculateTotalFee()}`);
console.log(`Is B.C.A available?: ${isCourseAvailable("B.C.A")}`);
console.log(`Head of B.C.A department: ${getHOD("BCA")}`);
console.log(welcomeMessage);
console.log(`Arithmetic: Total Fees = ${totalFees}, Remainder = ${remainder}`);
console.log(`Comparison: Is B.Pharma more expensive than B.C.A? ${isMoreExpensive}`);
console.log(`Logical: Are both available? ${areBothAvailable}`);
displayAllCourses();

headerImage.addEventListener('click', () => {
    alert('Header image clicked!');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Submitted: ${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value}`);
});

usernameInput.addEventListener('focus', () => {
    console.log('Username input focused.');
});

passwordInput.addEventListener('blur', () => {
    console.log('Password input blurred.');
});

coursesList.addEventListener('mouseover', () => {
    console.log('Hovered over the courses list.');
});

function updateWelcomeMessage() {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) {
        welcomeElement.textContent = welcomeMessage;
    }
}

function populateCoursesList() {
    if (coursesList) {
        coursesList.innerHTML = '';
        courseNames.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            coursesList.appendChild(listItem);
        });
    }
}

function addCourseRow(courseName, studentCount) {
    if (coursesTable) {
        const newRow = coursesTable.insertRow();
        const courseCell = newRow.insertCell(0);
        const studentCell = newRow.insertCell(1);
        courseCell.textContent = courseName;
        studentCell.textContent = studentCount;
    }
}

updateWelcomeMessage();
populateCoursesList();
addCourseRow('New Course', 100);

function getCourseDetailsAsJSON(courseName) {
    return JSON.stringify(courseDetails[courseName]);
}

function loadCourseDetailsFromJSON(jsonString) {
    const course = JSON.parse(jsonString);
    if (course.name) {
        courseDetails[course.name.replace(/\./g, '')] = course; 
        return `Course ${course.name} loaded from JSON`;
    }
    return 'Invalid course JSON data';
}

function fetchCourseDetails(courseName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://example.com/api/courses/${courseName}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const course = JSON.parse(xhr.responseText);
            console.log(`Fetched Course: ${course.name}, Fee: ${course.fee}`);
            courseDetails[course.name.replace(/\./g, '')] = course;
        } else {
            console.log(`Failed to fetch course details: ${xhr.statusText}`);
        }
    };
    xhr.onerror = function () {
        console.log('Error during AJAX request');
    };
    xhr.send();
}

const courseJson = getCourseDetailsAsJSON('BTech');
console.log(`Course JSON: ${courseJson}`);
console.log(loadCourseDetailsFromJSON(courseJson));

fetchCourseDetails('BTech');
fetchCourseDetails('B.Pharm');

