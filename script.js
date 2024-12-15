import { loadData, saveData } from './modules/data.js';
import University from './modules/university.js';
import CourseManager from './modules/courseManager.js';
import { updateWelcomeMessage, populateCoursesList, addCourseRow } from './modules/ui.js';

const data = loadData();  
const university = new University(data);
const courseManager = new CourseManager(data.courses);

university.displayInfo();
courseManager.displayAllCourses();
console.log(`Total Fee of all courses: ${courseManager.calculateTotalFee()}`);
console.log(`Is B.C.A available?: ${courseManager.isCourseAvailable("BCA")}`);
console.log(`Head of B.C.A department: ${courseManager.getHOD("BCA")}`);

populateCoursesList(data.courses);
updateWelcomeMessage();

addCourseRow('New Course', 100);

const newCourseData = {
    name: 'MTech',
    duration: '2 Years',
    fee: 90000,
    students: 400,
    hod: 'Dr. Sharma'
};
console.log(courseManager.addCourse(newCourseData));

saveData(data);
