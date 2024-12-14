const contentContainer = document.querySelector('.content');
const headerImage = document.querySelector('.header-image');
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#fname');
const middleNameInput = document.querySelector('#mname');
const lastNameInput = document.querySelector('#lname');
const usernameInput = document.querySelector("#username");
const password = document.querySelector("#password");
const submitButton = document.querySelector('input[type="submit"]');
const coursesList = document.querySelector('.c');
const coursesTable = document.querySelector('table');

const universityName = "Future University";

const totalCourses = 5;
const studentsCount = 1500;

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
        hod: "Mr. Virendra Singh"
    }
};

let notAssigned = null;

let unassignedVariable;

function displayUniversityInfo() {
    console.log(`Welcome to ${universityName}`);
    console.log(`Total Courses: ${totalCourses}`);
    console.log(`Total Students: ${studentsCount}`);
    console.log(`College Open: ${isCollegeOpen}`);
}

function displayCourseDetails(course) {
    const details = courseDetails[course];
    console.log(`Course: ${details.name}`);
    console.log(`Duration: ${details.duration}`);
    console.log(`Fee: ${details.fee}`);
    console.log(`Students: ${details.students}`);
}

displayUniversityInfo();
displayCourseDetails("BTech");
