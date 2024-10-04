import { submitFormData } from './formFunctions';
import StepPersonalInfo from '../MultiStepFormSteps/StepPersonalInfo';
import StepEducationDetails from '../MultiStepFormSteps/StepEducationDetails';
import StepTeachingPreferences from '../MultiStepFormSteps/StepTeachingPreferences';
import StepWorkExperience from '../MultiStepFormSteps/StepWorkExperience';

const validateStep = (currentStep, formData) => {
  const errors = {};

  switch (currentStep) {
    case 0:
      if (!formData.fullName) {
        errors.fullName = "Required field";
      }
      if (!formData.mobile) {
        errors.mobile = "Required field";
      } else if (!/^\d{11}$/.test(formData.mobile)) {
        errors.mobile = "Invalid phone number";
      }
      if (!formData.email) {
        errors.email = "Required field";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email address";
      }
      if (!formData.cityOfBirth) {
        errors.cityOfBirth = "Required field";
      }
      break;

    case 1:
      if (!formData.faculty) {
        errors.faculty = "Required field";
      }
      if (!formData.university) {
        errors.university = "Required field";
      }
      if (!formData.trackName) {
        errors.trackName = "Required field";
      }
      if (!formData.branch) {
        errors.branch = "Required field";
      }
      break;

    case 2:
      if (!formData.teachingBranches) {
        errors.teachingBranches = "Required field"; 
      }
      if (!formData.preferredCourses) {
        errors.preferredCourses = "Required field"; 
      }
      break;

      case 3:
        if (!formData.jobTitle) {
          errors.jobTitle = "Required field";
        }
        if (!formData.companyName) {
          errors.companyName = "Required field";
        }
        if (!formData.yearsOfExperience) {
          errors.yearsOfExperience = "Required field";
        }
      break;

    default:
      break;
  }

  return errors;
};

export const handleNext = (setCurrentStep, steps, currentStep, formData, setFormErrors) => {
  const errors = validateStep(currentStep, formData);

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  setFormErrors({});
  setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
};

export const handlePrevious = (setCurrentStep) => {
  setCurrentStep((prev) => Math.max(prev - 1, 0));
};

export const handleSubmit = (currentStep, steps, formData, setFormErrors) => {
  const errors = validateStep(currentStep, formData);
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return; 
  }


  if (currentStep === steps.length - 1) {
    console.log("Submitted data:", formData);

    submitFormData(formData)
      .then(() => {
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }
};

export const renderStep = (currentStep, formData, setFormData, formErrors) => {
  switch (currentStep) {
    case 0:
      return <StepPersonalInfo formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    case 1:
      return <StepEducationDetails formData={formData} setFormData={setFormData}  formErrors={formErrors}/>;
    case 2:
      return <StepTeachingPreferences formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    case 3:
      return <StepWorkExperience formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    default:
      return null;
  }
};
