/* eslint-disable react/prop-types */
import Input from "../Ui/Input";
import { handleInputChange } from "../submitFormData/formFunctions";

const StepWorkExperience = ({ formData, setFormData ,formErrors}) => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Work Experience
      </h1>

      <div>
        <Input
          label="job Title"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
          errorMessage={formErrors.jobTitle}
        />
      </div>
      <div>
        <Input
          label="company Name"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
          errorMessage={formErrors.companyName}
        />
      </div>
      <div>
        <Input
          label="years Of Experience"
          id="yearsOfExperience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
          errorMessage={formErrors.yearsOfExperience}
        />
      </div>
      <div>
        <Input
          label="isFreelancer"
          id="isFreelancer"
          name="isFreelancer"
          type="checkbox"
          checked={formData.isFreelancer}
          onChange={(e) => handleInputChange(e, setFormData)}
        />
      </div>
    </div>
  );
};

export default StepWorkExperience;
