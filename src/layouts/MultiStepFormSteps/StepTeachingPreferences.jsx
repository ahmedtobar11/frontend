import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleMultiSelectChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
import { useBranchesAndTracks } from "../../contexts/BranchesAndTracksContext";

const StepTeachingPreferences = ({
  formData,
  setFormData,
  formErrors,

  handleSelectBlur,
}) => {
  const { branches } = useBranchesAndTracks();

  const optionsinterestedInTeaching = Data.interestedInTeaching?.map(
    (interestedInTeaching) => ({
      value: interestedInTeaching.value,
      label: interestedInTeaching.label,
    })
  );
  const optionPreferenceCourse = [];
  const optionBranchWantteach = Array.from(
    new Set(branches?.map((branch) => branch?.name))
  ).map((name) => ({
    value: name,
    label: name,
  }));

  return (
    <div className="space-y-12">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Teaching Preferences
      </h1>
      <div className="w-max-xl md:p-10">
        <div>
          <SelectComponent
            options={optionBranchWantteach}
            label="Preferred Teaching Branches"
            onChange={(selectedOption) =>
              handleMultiSelectChange(
                selectedOption,
                "preferredTeachingBranches",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur(
                "preferredTeachingBranches",
                formData.preferredTeachingBranches
              )
            }
            value={
              formData?.preferredTeachingBranches
                ? optionBranchWantteach
                    .filter((option) =>
                      formData.preferredTeachingBranches.includes(option.value)
                    )
                    .concat(
                      formData.preferredTeachingBranches
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
            name="preferredTeachingBranches"
            placeholder="Select branches you can teach in"
            required={true}
            isMulti={true}
            errorMessage={formErrors.preferredTeachingBranches}
          />
        </div>

        <div>
          <SelectComponent
            options={optionsinterestedInTeaching}
            label="Teaching Interest"
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
            required
            placeholder="Select your teaching interest"
            errorMessage={formErrors.interestedInTeaching}
          />
        </div>
        <div className="input-with-tooltip">
          <SelectComponent
            options={optionPreferenceCourse}
            label="Preferred Teaching Courses"
            onChange={(selectedOption) =>
              handleMultiSelectChange(
                selectedOption,
                "preferredCoursesToTeach",
                setFormData
              )
            }
            onBlur={() =>
              handleSelectBlur(
                "preferredCoursesToTeach",
                formData.preferredCoursesToTeach
              )
            }
            value={
              formData?.preferredCoursesToTeach
                ? optionPreferenceCourse
                    .filter((option) =>
                      formData.preferredCoursesToTeach.includes(option.value)
                    )
                    .concat(
                      formData.preferredCoursesToTeach
                        .filter(
                          (value) =>
                            !optionPreferenceCourse.some(
                              (option) => option.value === value
                            )
                        )
                        .map((value) => ({ value, label: value }))
                    )
                : []
            }
            name="preferredCoursesToTeach"
            placeholder="Create your preferred teaching courses (e.g., JavaScript, TypeScript, NodeJs)"
            required={true}
            isMulti={true}
            isCreatable={true}
            errorMessage={formErrors.preferredCoursesToTeach}
          />

          <span className="tooltip">
            Write the courses separated by commas, e.g., JavaScript, TypeScript
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepTeachingPreferences;
