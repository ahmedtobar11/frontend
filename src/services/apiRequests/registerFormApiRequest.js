import apiInstance from "../interceptor/axiosInstance";

const registerForm = async (graduateData) => {
  const response = await apiInstance.post("graduates", graduateData);
  return response;
};

export default {
  registerForm,
};
