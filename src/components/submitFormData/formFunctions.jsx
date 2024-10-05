import axios from 'axios';

export const handleInputChange = (e, setFormData) => {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

export const handleFileChange = (e, setFormData) => {
  const file = e.target.files[0];
  setFormData(prev => ({
    ...prev,
    photo: file
  }));
};

export const submitFormData = async (formData) => {
  try {
    const formDataObject = new FormData();

    Object.keys(formData).forEach(key => {
      formDataObject.append(key, formData[key]);
    });

    const response = await axios.post("iti api from back end", formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Form submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
