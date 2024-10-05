import axios from "axios";

const registerForm = async (graduateData) => {
  const response = await axios.post(
    "http://localhost:8080/api/v1/",
    graduateData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

export default {
  registerForm,
};
