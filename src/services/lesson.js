import apiClient from "./api";

const getSkills = async () => {
    return await apiClient.get('/lessons/getSkills');
}

export {
    getSkills
}