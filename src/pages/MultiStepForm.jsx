import { useState } from "react";
import StepIndicator from "../components/Ui/StepIndicator";
import { renderStep, steps } from "../services/registerFormUtils";
import Button from "../components/Ui/Button";
import registerFormApiRequest from "../services/apiRequests/registerFormApiRequest";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    photo: null,
    mobile: "",
    email: "",
    cityOfBirth: "",
    faculty: "",
    university: "",
    trackName: "",
    branch: "",
    program: "",
    graduationYear: "",
    itiIntake: "",
    teachingBranches: "",
    preferredCourses: "",
    jobTitle: "",
    companyName: "",
    yearsOfExperience: "",
    isFreelancer: "",
  });

  const [formErrors, setFormErrors] = useState({});

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

  const handleNext = (setCurrentStep, currentStep, formData, setFormErrors) => {
    const errors = validateStep(currentStep, formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = (setCurrentStep) => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (currentStep, formData, setFormErrors) => {
    try {
      const errors = validateStep(currentStep, formData);
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      if (currentStep === steps.length - 1) {
        console.log("Submitted data:", formData);

        const graduateData = new FormData();

        Object.keys(formData).forEach((key) => {
          graduateData.append(key, formData[key]);
        });
        const response = await registerFormApiRequest.registerForm(
          graduateData
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error.message || "Error Submitting register form");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <aside className="w-80 mr-6 space-y-12 bg-main-light px-2">
        <StepIndicator currentStep={currentStep} />
        <img src="logo.png" alt="logo" />
      </aside>
      <div className="flex-1 px-6 py-10 space-y-4">
        <div className="min-h-px max-h-400px">
          {renderStep(currentStep, formData, setFormData, formErrors)}
        </div>
        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button
              onClick={() => handlePrevious(setCurrentStep)}
              text={"previous"}
              variant={"outline"}
            />
          )}
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={() =>
                handleNext(setCurrentStep, currentStep, formData, setFormErrors)
              }
              text={"NEXT"}
              className="place-self-end"
            />
          ) : (
            <Button
              onClick={() => handleSubmit(currentStep, formData, setFormErrors)}
              text={"Submit"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
