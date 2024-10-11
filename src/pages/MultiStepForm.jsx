import { useState } from "react";
import StepIndicator from "../components/Ui/StepIndicator";
import { renderStep, steps } from "../services/registerFormUtils";
import Button from "../components/Ui/Button";
import registerFormApiRequest from "../services/apiRequests/registerFormApiRequest";
import stepValidationSchemas from "../../utils/validations/graduationShema";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    personalPhoto: null,
    mobile: "",
    email: "",
    cityOfBirthplace: "",
    faculty: "",
    university: "",
    trackName: "",
    branch: "",
    graduationYearFromIti: "",
    branchesYouCanTeachIn: "",
    preferredCoursesToTeach: "",
    fullJobTitle: "",
    companyName: "",
    yearsOfExperience: 0,
    workedAsFreelancerBefore: false,
    program: "",
    intake: "",
    interestedInTeaching: "",

    //not done back
    linkedin: "",
    isWork: false,
    freeLancingGain: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateStep = async (currentStep, formData) => {
    try {
      await stepValidationSchemas[currentStep].validate(formData, {
        abortEarly: false,
      });
      return {};
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      return errors;
    }
  };

  const handleNext = async (
    setCurrentStep,
    currentStep,
    formData,
    setFormErrors
  ) => {
    const errors = await validateStep(currentStep, formData);

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

  const handleBlur = async (e) => {
    const { name, value } = e.target;

    const errors = await validateStep(currentStep, {
      ...formData,
      [name]: value,
    });

    setFormErrors((prev) => ({
      ...prev,
      [name]: errors[name] || "",
    }));
  };

  const handleSelectBlur = async (name, value) => {
    const errors = await validateStep(currentStep, {
      ...formData,
      [name]: value,
    });

    setFormErrors((prev) => ({
      ...prev,
      [name]: errors[name] || "",
    }));
  };

  const handleSubmit = async (currentStep, formData, setFormErrors) => {
    try {
      const errors = await validateStep(currentStep, formData);
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      if (currentStep === steps.length - 1) {
        console.log("Submitted data:", formData);

        const response = await registerFormApiRequest.registerForm(formData);
        console.log(response);
      }
    } catch (error) {
      console.log(error.message || "Error Submitting register form");
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <aside className="w-80 mr-6 space-y-12 bg-main-light px-2 flex flex-col justify-between">
        <StepIndicator currentStep={currentStep} formData={formData} />

        <img className="self-center " src="logo.png" alt="logo" />
      </aside>
      <div className="flex-1 px-6 py-10 space-y-4">
        <div className="min-h-px  max-h-full">
          {renderStep(
            currentStep,
            formData,
            setFormData,
            formErrors,
            handleBlur,
            handleSelectBlur
          )}
        </div>
        <div className="flex md:justify-between px-10 items-start gap-6 ">
          <Button
            onClick={() => handlePrevious(setCurrentStep)}
            text={"Previous"}
            variant={"outline"}
            className={`${
              currentStep > 0 ? " text-center   w-32" : "invisible"
            } place-self-end`}
          />

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={() =>
                handleNext(setCurrentStep, currentStep, formData, setFormErrors)
              }
              text={"NEXT"}
              className="place-self-end w-32 "
            />
          ) : (
            <Button
              onClick={() => handleSubmit(currentStep, formData, setFormErrors)}
              text={"Submit"}
              className="place-self-end w-32 "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
