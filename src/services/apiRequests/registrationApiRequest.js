import apiInstance from "../interceptor/axiosInstance";

const createRegistrationRequest = async (graduateData) => {
  const response = await apiInstance.post("registrationRequests", graduateData);
  return response;
};

export default {
  createRegistrationRequest,
};
