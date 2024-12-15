export default class University {
    constructor(data) {
        this.name = data.university.name;
        this.studentsCount = data.university.studentsCount;
        this.isCollegeOpen = data.university.isCollegeOpen;
    }

    displayInfo() {
        console.log(`Welcome to ${this.name}`);
        console.log(`Total Students: ${this.studentsCount}`);
        console.log(`College Open: ${this.isCollegeOpen}`);
    }

    checkStudentsThreshold(threshold) {
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

