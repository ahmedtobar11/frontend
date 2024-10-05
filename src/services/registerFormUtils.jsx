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

export const handleFileChange = (e, setFormData) => {
  const file = e.target.files[0];
  setFormData((prev) => ({
    ...prev,
    photo: file,
  }));
};

export const renderStep = (currentStep, formData, setFormData, formErrors) => {
  switch (currentStep) {
    case 0:
      return (
        <StepPersonalInfo
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
        />
      );
    case 1:
      return (
        <StepEducationDetails
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
        />
      );
    case 2:
      return (
        <StepTeachingPreferences
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
        />
      );
    case 3:
      return (
        <StepWorkExperience
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
        />
      );
    default:
      return null;
  }
};
