import StepPersonalInfo from "../layouts/MultiStepFormSteps/StepPersonalInfo";
import StepEducationDetails from "../layouts/MultiStepFormSteps/StepEducationDetails";
import StepTeachingPreferences from "../layouts/MultiStepFormSteps/StepTeachingPreferences";
import StepWorkExperience from "../layouts/MultiStepFormSteps/StepWorkExperience";

export const steps = [
  "Personal Information",
  "Education Details",
  "Teaching Preferences",
  "Work Experience",
];

const stepComponents = [
  StepPersonalInfo,
  StepEducationDetails,
  StepTeachingPreferences,
  StepWorkExperience,
];

export const handleInputChange = (e, setFormData) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => {
    const updatedFormData = {
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    };

    if (name === "isEmployed" && !checked) {
      updatedFormData.fullJobTitle = "";
      updatedFormData.companyName = "";
      updatedFormData.yearsOfExperience = 0;
    }

    return updatedFormData;
  });
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
    [fieldName]: Array.isArray(newValues) ? newValues : [],
  }));
};

export const handleFileChange = (e, setFormData) => {
  const file = e.currentTarget.files[0];
  setFormData((prev) => ({
    ...prev,
    personalPhoto: file,
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
  const StepComponent = stepComponents[currentStep];
  return StepComponent ? (
    <StepComponent
      formData={formData}
      setFormData={setFormData}
      formErrors={formErrors}
      handleBlur={handleBlur}
      handleSelectBlur={handleSelectBlur}
    />
  ) : null;
};
