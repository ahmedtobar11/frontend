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
      <div className=" w-max-xl px-10">
        <div>
          <Input
            label=" Full Name"
            id="fullName"
            name="fullName"
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
            value={formData.email}
            onChange={(e) => handleInputChange(e, setFormData)}
            onBlur={(e) => handleBlur(e)}
            required
            errorMessage={formErrors.email}
          />
        </div>
        {
          <div>
            <Input
              label="Linked in"
              id="linkedin"
              name="linkedin"
              type="linkedin"
              value={formData.linkedin}
              onChange={(e) => handleInputChange(e, setFormData)}
              onBlur={(e) => handleBlur(e)}
              required
              errorMessage={formErrors.linkedin}
            />
          </div>
        }
        <div>
          <SelectComponent
            options={options}
            label="City Of Birth"
            onChange={(selectedOption) =>
              handleSelectChange(
                selectedOption,
                "cityOfBirthplace",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur("cityOfBirthplace", formData.cityOfBirthplace)
            }
            value={
              options.find(
                (option) => option.value === formData.cityOfBirthplace
              ) || {
                value: formData.cityOfBirthplace,
                label: formData.cityOfBirthplace,
              }
            }
            name="cityOfBirthplace"
            placeholder="City Of Birth"
            isCreatable
            required
            errorMessage={formErrors.cityOfBirthplace}
          />
        </div>

        <div>
          <Input
            label="Person image"
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
