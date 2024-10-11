import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleMultiSelectChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
import { useEffect, useState } from "react";
import branchApiRequest from "../../services/apiRequests/branchApiRequest";

const StepTeachingPreferences = ({
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur,
}) => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Branches = await branchApiRequest.getAllBranches();
      setBranches(Branches);
    };

    fetchData();
  }, []);

  const optionsinterestedInTeaching = Data.interestedInTeaching?.map(
    (interestedInTeaching) => ({
      value: interestedInTeaching.value,
      label: interestedInTeaching.label,
    })
  );

  const optionBranchWantteach = Array.from(
    new Set(branches?.map((branch) => branch?.name))
  ).map((name) => ({
    value: name,
    label: name,
  }));

  return (
    <div className=" space-y-12">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Teaching Preferences
      </h1>
      <div className="w-max-xl md:p-10">
        <div>
          <SelectComponent
            options={optionBranchWantteach}
            label="Which Teaching Branches You Prefer"
            onChange={(selectedOption) =>
              handleMultiSelectChange(
                selectedOption,
                "branchesYouCanTeachIn",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur(
                "branchesYouCanTeachIn",
                formData.branchesYouCanTeachIn
              )
            }
            value={
              formData?.branchesYouCanTeachIn
                ? optionBranchWantteach
                    .filter((option) =>
                      formData.branchesYouCanTeachIn.includes(option.value)
                    )
                    .concat(
                      formData.branchesYouCanTeachIn
                        .filter(
                          (value) =>
                            !optionBranchWantteach.some(
                              (option) => option.value === value
                            )
                        )
                        .map((value) => ({ value, label: value }))
                    )
                : []
            }
            name="branchesYouCanTeachIn"
            required
            isMulti
            errorMessage={formErrors.branchesYouCanTeachIn}
          />
        </div>

        <div>
          <SelectComponent
            options={optionsinterestedInTeaching}
            label="interested In Teaching"
            onChange={(selectedOption) =>
              handleSelectChange(
                selectedOption,
                "interestedInTeaching",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur(
                "interestedInTeaching",
                formData.interestedInTeaching
              )
            }
            value={
              optionsinterestedInTeaching?.find(
                (option) => option.value === formData.interestedInTeaching
              ) || null
            }
            name="interestedInTeaching"
            placeholder="interested In Teaching"
            required
            errorMessage={formErrors.interestedInTeaching}
          />
        </div>
        <div>
          <Input
            label="Which Teaching Courses You Prefer"
            id="preferredCoursesToTeach"
            name="preferredCoursesToTeach"
            value={formData.preferredCoursesToTeach}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleInputChange(e, setFormData)}
            errorMessage={formErrors.preferredCoursesToTeach}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTeachingPreferences;
