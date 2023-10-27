import {
    BOXES,

    JAVASCRIPT_LESSONS,
    REACT_LESSONS,
    GOLANG_LESSONS,
    COBOL_LESSONS
} from '../helpers/constants';

export async function GetCourseFromDatabaseById(index) {
    switch (index) {
        case 'javascript': return JAVASCRIPT_LESSONS;
        case 'react': return REACT_LESSONS;
        case 'golang': return GOLANG_LESSONS;
        // case 'firebase': return JAVASCRIPT_LESSONS;
        case 'cobol': return COBOL_LESSONS;
        default: return [];
    }
}

export async function GetAllContentFromDatabase() {
    return BOXES;
}