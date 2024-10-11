import apiInstance from "../interceptor/axiosInstance";

const getAllbranchs = async () => {
  const response = await apiInstance.get("branches");
  return response.data.branches;
};

export default {
  getAllbranchs,
};
