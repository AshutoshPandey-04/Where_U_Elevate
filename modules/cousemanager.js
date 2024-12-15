import Course from './course.js';

export default class CourseManager {
    constructor(coursesData) {
        this.courses = Object.keys(coursesData).reduce((acc, courseName) => {
            acc[courseName] = new Course(coursesData[courseName]);
            return acc;
        }, {});
    }

    calculateTotalFee() {
        try {
            return Object.values(this.courses).reduce((total, course) => total + course.fee, 0);
        } catch (error) {
            console.error(`Error in calculateTotalFee: ${error.message}`);
            return 0;
        }
    }

    isCourseAvailable(courseName) {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return courseName in this.courses;
        } catch (error) {
            console.error(`Error in isCourseAvailable: ${error.message}`);
            return false;
        }
    }

    getHOD(courseName) {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return this.courses[courseName]?.hod || 'Course not found';
        } catch (error) {
            console.error(`Error in getHOD: ${error.message}`);
            return 'Error retrieving HOD';
        }
    }

    displayAllCourses() {
        try {
            Object.values(this.courses).forEach(course => course.displayDetails());
        } catch (error) {
            console.error(`Error in displayAllCourses: ${error.message}`);
        }
    }

    findCourse(courseName) {
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
    }

    addCourse(newCourseData) {
        try {
            const newCourse = new Course(newCourseData);
            this.courses[newCourse.name] = newCourse;
            return `Course ${newCourse.name} added with ${newCourse.students} students`;
        } catch (error) {
            console.error(`Error in addCourse: ${error.message}`);
            return 'Error adding course';
        }
    }
}
