import apiClient from "./api";

const requestOTP = async (email) => {
    return await apiClient.post('/users/requestOTP', { email });
}

const verifyOTP = async (email, otp) => {
    return await apiClient.post('/users/verifyOTP', { mail: email, otp });
}

export {
    requestOTP,
    verifyOTP,
};