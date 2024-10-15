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

  return (
    <div className="space-y-10 ">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Personal Information
      </h1>
      <div className="w-max-xl px-10">
        <div>
          <Input
            label="Full Name"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required
            errorMessage={formErrors.fullName}
          />
        </div>

        <div>
          <Input
            label="Mobile"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required
            errorMessage={formErrors.mobile}
          />
        </div>
        <div>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required
            errorMessage={formErrors.email}
          />
        </div>

        <div>
          <Input
            label="LinkedIn"
            id="linkedin"
            name="linkedin"
            type="linkedin"
            placeholder="Enter your LinkedIn profile URL"
            value={formData.linkedin}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            errorMessage={formErrors.linkedin}
          />
        </div>

        <div>
          <SelectComponent
            options={options}
            label="City Of Birth"
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "cityOfBirth", setFormData)
            }
            onBlur={() => handleSelectBlur("cityOfBirth", formData.cityOfBirth)}
            value={
              options.find((option) => option.value === formData.cityOfBirth) ||
              null
            }
            name="cityOfBirth"
            placeholder="Select your city of birth"
            isCreatable
            required
            errorMessage={formErrors.cityOfBirth}
          />
        </div>

        <div>
          <Input
            label="Personal Photo"
            id="personalPhoto"
            name="personalPhoto"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            errorMessage={formErrors.personalPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default StepPersonalInfo;
