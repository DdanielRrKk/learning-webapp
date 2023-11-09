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

    // return new Promise((resolve, reject) => {
    //     axios.get('http://localhost/learning-webapp/database/get_all_courses.php') // Adjust the path as needed
    //         .then(response => {
    //             console.log('Response Raw:', response);
    //             console.log('Response data:', response.data);
    //             resolve(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //             reject(error);
    //         });
    // });
}