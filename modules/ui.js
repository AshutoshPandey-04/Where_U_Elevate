export const updateWelcomeMessage = () => {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) welcomeElement.textContent = 'Welcome to our University Portal';
};

export const populateCoursesList = (courses) => {
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

export const addCourseRow = (courseName, studentCount) => {
    const coursesTable = document.getElementById('coursesTable');
    if (coursesTable) {
        const newRow = coursesTable.insertRow();
        const [courseCell, studentCell] = [newRow.insertCell(0), newRow.insertCell(1)];
        courseCell.textContent = courseName;
        studentCell.textContent = studentCount;
    }
};
