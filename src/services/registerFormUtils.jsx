import StepPersonalInfo from "../layouts/MultiStepFormSteps/StepPersonalInfo";
import StepEducationDetails from "../layouts/MultiStepFormSteps/StepEducationDetails";
import StepTeachingPreferences from "../layouts/MultiStepFormSteps/StepTeachingPreferences";
import StepWorkExperience from "../layouts/MultiStepFormSteps/StepWorkExperience";
import registerFormApiRequest from "./apiRequests/registerFormApiRequest";

export const steps = [
  "Personal Information",
  "Education Details",
  "Teaching Preferences",
  "Work Experience",
];

export const handleInputChange = (e, setFormData) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

export const handleSelectChange = (selectedOption, fieldName, setFormData) => {
  setFormData((prevData) => ({
    ...prevData,
    [fieldName]: selectedOption?.value || "",
  }));
};

export const handleMultiSelectChange = (
  selectedOptions,
  fieldName,
  setFormData
) => {
  const newValues = selectedOptions
    ? selectedOptions.map((option) => option.value)
    : [];

  setFormData((prevData) => ({
    ...prevData,
    [fieldName]: newValues,
  }));
};

export const handleFileChange = (e, setFormData) => {
  const file = e.target.files[0];
  setFormData((prev) => ({
    ...prev,
    photo: file,
  }));
};

export const renderStep = (
  currentStep,
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur
) => {
  switch (currentStep) {
    case 0:
      return (
        <StepPersonalInfo
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleBlur={handleBlur}
          handleSelectBlur={handleSelectBlur}
        />
      );
    case 1:
      return (
        <StepEducationDetails
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleBlur={handleBlur}
          handleSelectBlur={handleSelectBlur}
        />
      );
    case 2:
      return (
        <StepTeachingPreferences
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleBlur={handleBlur}
          handleSelectBlur={handleSelectBlur}
        />
      );
    case 3:
      return (
        <StepWorkExperience
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleBlur={handleBlur}
          handleSelectBlur={handleSelectBlur}
        />
      );

    default:
      return null;
  }
};
