import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleMultiSelectChange,
} from "../../services/registerFormUtils";
import tracksApiRequest from "../../services/apiRequests/tracksApiRequest";
import SelectComponent from "../../components/Ui/SelectComponent";
import { useEffect, useState } from "react";

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
      const Branches = await tracksApiRequest.getAllTracks();
      setBranches(Branches);

      // const branches = await branchesApiRequest.getAllBranches();
      // setBranches(branches); , etc...
    };

    fetchData();
  }, []);

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
                "teachingBranches",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur("teachingBranches", formData.teachingBranches)
            }
            value={
              formData?.teachingBranches
                ? optionBranchWantteach
                    .filter((option) =>
                      formData.teachingBranches.includes(option.value)
                    )
                    .concat(
                      formData.teachingBranches
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
            name="teachingBranches"
            required
            isMulti
            errorMessage={formErrors.teachingBranches}
          />
        </div>
        <div>
          <Input
            label="Which Teaching Courses You Prefer"
            id="preferredCourses"
            name="preferredCourses"
            value={formData.preferredCourses}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleInputChange(e, setFormData)}
            errorMessage={formErrors.preferredCourses}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTeachingPreferences;
