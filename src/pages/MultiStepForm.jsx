import { useState } from 'react';
import StepIndicator from '../components/Ui/StepIndicator';
import {handleSubmit,handlePrevious,handleNext,renderStep}  from '../components/submitFormData/HandelFormData'
import Button  from '../components/Ui/Button';

const steps = [
  "Personal Information",
  "Education Details",
  "Teaching Preferences",
  "Work Experience"
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    photo: null,
    mobile: '',
    email: '',
    cityOfBirth: '',
    faculty: '',
    university: '',
    trackName: '',
    branch: '',
    program: '',
    graduationYear: '',
    itiIntake: '',
    teachingBranches: '',
    preferredCourses: '',
    jobTitle: '',
    companyName: '',
    yearsOfExperience: '',
    isFreelancer: ''
  });


  const [formErrors, setFormErrors] = useState({}); 
  
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <aside className="w-80 mr-6 space-y-12 bg-main-light px-2">
        <StepIndicator currentStep={currentStep} steps={steps} />
        <img src="Pink and Black Modern Initials Logo Design.png" alt="" />
      </aside>
      <div className="flex-1 px-6 py-10 space-y-4">
      <div className='min-h-px max-h-400px'>
          {renderStep(currentStep, formData, setFormData, formErrors)} 
        </div>
        <div className="flex justify-between">
          {currentStep > 0 && <Button onClick={()=>handlePrevious(setCurrentStep)} text={"previous"} variant={"outline"} />}
          {currentStep < steps.length - 1 ? (
            <Button onClick={()=>handleNext(setCurrentStep, steps, currentStep, formData, setFormErrors)} text={"NEXT"} className='place-self-end'/>
          ) : (
            <Button onClick={()=>handleSubmit(currentStep,steps,formData ,setFormErrors)} text={"Submit"}/>
          )}
        </div>
      </div>

    </div>
  );
};

export default MultiStepForm; 