import { axiosInstance } from ".";

// Obtenir tous les cv
export const GetAllResumes = async () => {
    const response = await axiosInstance("get", "/resumes");
    return response;
};

// Obtenir CV en fonction du resumeId
export const GetOneResume = async (userId) => {
    const response = await axiosInstance("get", `/resumes/${userId}`);
    return response;
};

// Obtenir tous les cv en fonction du userId
export const GetUserResumes = async (userId) => {
    const response = await axiosInstance("get", `/resumes/user/${userId}`);
    return response;
};

//créer un cv par le titre
export const CreateResume = async (values) => {
    const response = await axiosInstance("post", "/resumes/create",values);
    return response;
};

//modifier les info personnelles
export const UpdatePersonalInfo = async (resumeId, values) => {
    const response = await axiosInstance("put", `/resumes/update-personal-info/${resumeId}`,values);
    return response;
};