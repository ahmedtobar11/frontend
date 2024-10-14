import apiInstance from "../interceptor/axiosInstance";

const createRegistrationRequest = async (graduateData) => {
  const response = await apiInstance.post(
    "registration-requests",
    graduateData
  );
  return response;
};

export default {
  createRegistrationRequest,
};
