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
    <div className="space-y-4">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Work Experience
      </h1>
      <div className="w-max-xl md:p-10">
        <div>
          <Input
            label="Job Title"
            id="fullJobTitle"
            name="fullJobTitle"
            placeholder="Enter your job title"
            value={formData.fullJobTitle}
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
            value={formData.companyName}
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
            value={formData.yearsOfExperience}
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

        <div>
          <SelectComponent
            options={optionsFreelancingIncome}
            label="You Freelancing Income"
            onChange={(selectedOption) =>
              handleSelectChange(
                selectedOption,
                "freelancingIncome",
                setFormData
              )
            }
            value={
              optionsFreelancingIncome?.find(
                (option) => option.value === formData.freelancingIncome
              ) || null
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
        <div className="md:flex gap-6 w-[290px]  items-end">
          <Input
            label="Freelancer"
            id="hasFreelanceExperience"
            name="hasFreelanceExperience"
            type="checkbox"
            className="flex flex-row-reverse gap-2  w-32 py-3"
            checked={formData.hasFreelanceExperience}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          {
            <Input
              label="Have Work"
              id="isEmployed"
              name="isEmployed"
              type="checkbox"
              className="flex flex-row-reverse gap-2 mt-5  w-32 py-3"
              checked={formData.isEmployed}
              onChange={(e) => handleInputChange(e, setFormData)}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default StepWorkExperience;
