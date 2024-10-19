import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleFileChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";

import SelectComponent from "../../components/Ui/SelectComponent";
const StepPersonalInfo = ({
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur,
}) => {
  const options = Data.CityOfEgypt?.map((city) => ({
    value: city.value,
    label: city.label,
  }));

  const renderInput = (
    label,
    id,
    name,
    type = "text",
    placeholder,
    required = false
  ) => (
    <Input
      label={label}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={formData[name]}
      onChange={(e) => handleInputChange(e, setFormData)}
      onBlur={(e) => handleBlur(e)}
      required={required}
      errorMessage={formErrors[name]}
    />
  );

  return (
    <div className="space-y-10">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Personal Information
      </h1>
      <div className="w-max-xl md:px-10 pb-5 lg:pb-5">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {renderInput(
            "Full Name",
            "fullName",
            "fullName",
            "text",
            "Enter your full name",
            true
          )}
          {renderInput(
            "Mobile",
            "mobile",
            "mobile",
            "text",
            "Enter your mobile number",
            true
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {renderInput(
            "Email",
            "email",
            "email",
            "email",
            "Enter your email address",
            true
          )}
          {renderInput(
            "LinkedIn",
            "linkedin",
            "linkedin",
            "text",
            "Enter your LinkedIn profile URL"
          )}
        </div>

        <div>
          <SelectComponent
            options={options}
            placeholder="Select or Create your city of birth"
            label="City Of Birth"
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "cityOfBirth", setFormData)
            }
            onBlur={() => handleSelectBlur("cityOfBirth", formData.cityOfBirth)}
            value={
              options.find((option) => option.value === formData.cityOfBirth) ||
              (formData.cityOfBirth
                ? { value: formData.cityOfBirth, label: formData.cityOfBirth }
                : null)
            }
            name="cityOfBirth"
            isCreatable
            required
            errorMessage={formErrors.cityOfBirth}
          />
        </div>

        <div className="">
          <Input
            label="Personal Photo"
            id="personalPhoto"
            name="personalPhoto"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required
            errorMessage={formErrors.personalPhoto}
          />
        </div>
        
      </div>
    </div>
  );
};
export default StepPersonalInfo;
