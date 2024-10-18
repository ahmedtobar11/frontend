import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
const StepWorkExperience = ({
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur,
}) => {
  const optionsFreelancingIncome = Data.freelancingIncome?.map((gain) => ({
    value: gain.value,
    label: gain.label,
  }));
  return (
    <div className="space-y-0">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Work Experience
      </h1>
      <div className="flex justify-center gap-12 w-full  ">
        <Input
          label="Freelance Experience"
          id="hasFreelanceExperience"
          name="hasFreelanceExperience"
          type="checkbox"
          className="flex flex-row-reverse gap-2  w-32 py-3  justify-center"
          checked={formData.hasFreelanceExperience}
          onChange={(e) => handleInputChange(e, setFormData)}
        />
        {
          <Input
            label="Employed"
            id="isEmployed"
            name="isEmployed"
            type="checkbox"
            className="flex flex-row-reverse gap-2   w-32 py-3 justify-center"
            checked={formData.isEmployed}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
        }
      </div>

      <div>
        <SelectComponent
          options={optionsFreelancingIncome}
          label="You Freelancing Income"
          onChange={(selectedOption) =>
            handleSelectChange(selectedOption, "freelancingIncome", setFormData)
          }
          value={
            formData.hasFreelanceExperience
              ? optionsFreelancingIncome?.find(
                  (option) => option.value === formData.freelancingIncome
                ) || null
              : (formData.freelancingIncome = "")
          }
          onBlur={() =>
            handleSelectBlur("freelancingIncome", formData.freelancingIncome)
          }
          name="freelancingIncome"
          placeholder="FreeLancing Income"
          required={formData.isFreelancer === true}
          errorMessage={
            formData.hasFreelanceExperience === true
              ? formErrors.freelancingIncome
              : null
          }
          disabled={formData.hasFreelanceExperience === true ? false : true}
        />
      </div>

      <div className="w-max-xl md:px-5">
        <div>
          <Input
            label="Job Title"
            id="fullJobTitle"
            name="fullJobTitle"
            placeholder="Enter your job title"
            value={formData.isEmployed ? formData.fullJobTitle : ""}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required={formData.isEmployed === true}
            errorMessage={
              formData.isEmployed === true ? formErrors.fullJobTitle : null
            }
            disabled={formData.isEmployed === true ? false : true}
          />
        </div>
        <div>
          <Input
            label="Company Name"
            id="companyName"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.isEmployed ? formData.companyName : ""}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required={formData.isEmployed === true}
            errorMessage={
              formData.isEmployed === true ? formErrors.companyName : null
            }
            disabled={formData.isEmployed === true ? false : true}
          />
        </div>
        <div>
          <Input
            label="Years of Experience"
            id="yearsOfExperience"
            name="yearsOfExperience"
            placeholder="Enter your number years of experience"
            value={formData.isEmployed ? formData.yearsOfExperience : 0}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required={formData.isEmployed === true}
            type="number"
            errorMessage={
              formData.isEmployed === true ? formErrors.yearsOfExperience : null
            }
            disabled={formData.isEmployed === true ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default StepWorkExperience;
