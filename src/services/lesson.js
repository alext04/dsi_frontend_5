import apiClient from "./api";

const getSkills = async () => {
    return await apiClient.get('/lessons/getSkills');
}

const createLesson = async (token, lessonName, classId, skills) => {
    return await apiClient.post('/lessons/newLesson', {
        token,
        lesson_name: lessonName,
        classId,
        skills
    });
}

export {
    getSkills,
    createLesson
}