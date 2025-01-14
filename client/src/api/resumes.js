import { axiosInstance } from ".";

// Obtenir tous les cv
export const GetAllResumes = async () => {
    const response = await axiosInstance("get", "/resumes");
    return response;
};

// Obtenir tous les cv en fonction du userid
export const GetUserResumes = async (userId) => {
    const response = await axiosInstance("get", `/resumes/user/${userId}`);
    return response;
};

//créer un cv par le titre
export const CreateResume = async (values) => {
    const response = await axiosInstance("post", "/resumes/create",values);
    return response;
};