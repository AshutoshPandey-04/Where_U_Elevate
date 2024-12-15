export const defaultData = {
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

export const loadData = () => {
    const storedData = localStorage.getItem('universityData');
    if (storedData) {
        return JSON.parse(storedData);  
    }
    return defaultData;
};

export const saveData = (data) => {
    localStorage.setItem('universityData', JSON.stringify(data));  
};

