import apiInstance from "../interceptor/axiosInstance";

const registerForm = async (graduateData) => {
  const response = await apiInstance.post("grads", graduateData);
  return response;
};

export default {
  registerForm,
};
