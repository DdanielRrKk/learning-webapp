import axios from "axios";


export async function GetAllCourses() {
    try {
        const response = await axios.get('http://localhost/learning-webapp/database/controllers/get_all_courses.php');
        // console.log('Response:', response);

        const newArray = [];
        response.data.forEach(element => {
            const tempArray = element.split('|');

            const newObj = {
                id: parseInt(tempArray[0]),
                courseId: tempArray[1],
                title: tempArray[2],
                image: tempArray[3]
            }

            newArray.push(newObj);
        });
        return newArray;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function GetCourseById(courseId) {
    try {
        const response = await axios.get('http://localhost/learning-webapp/database/controllers/get_lessons_for_course.php', {
            params: {
                id: courseId
            }
        });
        console.log('GetCourseById Response:', response);

        const newArray = [];
        response.data.forEach(element => {
            const tempArray = element.split('|');

            const newObj = {
                id: parseInt(tempArray[0]),
                ordernumber: parseInt(tempArray[1]),
                title: tempArray[2],
                isSeparator: parseBoolean(tempArray[3]),
                courseId: parseInt(tempArray[4]),
            }

            newArray.push(newObj);
        });
        return newArray;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}