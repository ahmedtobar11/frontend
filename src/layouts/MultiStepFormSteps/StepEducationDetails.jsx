import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
import { useBranchesAndTracks } from "../../contexts/BranchesAndTracksContext";

const StepEducationDetails = ({
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur,
}) => {
  const { tracks, branches } = useBranchesAndTracks();

  const optionsUniversity = Data.Universities?.map((university) => ({
    value: university.value,
    label: university.label,
  }));
  const optionsProgram = Data.Program?.map((program) => ({
    value: program.value,
    label: program.label,
  }));
  const optionsRound = Data.round?.map((round) => ({
    value: round.value,
    label: round.label,
  }));
  const optionsFactualy = Data.faculties?.map((faculty) => ({
    value: faculty.value,
    label: faculty.label,
  }));

  const optionTrack = Array.from(
    new Set(tracks?.map((track) => track?.name))
  ).map((name) => ({
    value: name,
    label: name,
  }));

  const optionbranch = Array.from(
    new Set(branches?.map((branch) => branch?.name))
  ).map((name) => ({
    value: name,
    label: name,
  }));
  const isRoundDisabled =
    !formData.program ||
    formData.program === "Professional Training Program - (9 Months)";
  const isIntakeDisabled =
    !formData.program ||
    formData.program === "Intensive Code Camp - (4 Months)";
  return (
    <div className="space-y-6 lg:space-y-0">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Education Details
      </h1>
      <div className="w-max-xl md:px-10 pb-5 lg:pb-5">
        <div>
          <div className="xl:flex xl:space-x-4">
            <SelectComponent
              options={optionsUniversity}
              label="University"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "university", setFormData)
              }
              onBlur={() => handleSelectBlur("university", formData.university)}
              value={
                optionsUniversity.find((option) => option.value === formData.university) ||
                (formData.university
                  ? { value: formData.university, label: formData.university }
                  : null)
              }
              name="university"
              placeholder="Select your university"
              isCreatable
              required
              errorMessage={formErrors.university}
            />

            <SelectComponent
              options={optionsFactualy}
              label="Faculty"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "faculty", setFormData)
              }
              onBlur={() => handleSelectBlur("faculty", formData.faculty)}
              value={
                optionsFactualy.find((option) => option.value === formData.faculty) ||
                (formData.faculty
                  ? { value: formData.faculty, label: formData.faculty }
                  : null)
              }
              name="faculty"
              placeholder="Select your faculty"
              isCreatable
              required
              errorMessage={formErrors.faculty}
            />
          </div>

          <div className="xl:flex xl:space-x-4">
            <SelectComponent
              options={optionbranch}
              label="ITI branch you Graduted from"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "branch", setFormData)
              }
              onBlur={() => handleSelectBlur("branch", formData.branch)}
              value={
                optionbranch?.find(
                  (option) => option.value === formData.branch
                ) || null
              }
              name="branch"
              placeholder="Select your ITI branch"
              required
              errorMessage={formErrors.branch}
            />
            <Input
              label="Graduation Year From ITI"
              id="itiGraduationYear"
              name="itiGraduationYear"
              value={formData.itiGraduationYear}
              placeholder="Enter your ITI graduation year"
              onChange={(e) => handleInputChange(e, setFormData)}
              onBlur={(e) => handleBlur(e)}
              required
              errorMessage={formErrors.itiGraduationYear}
              type="Number"
            />
          </div>

          <div>
            <SelectComponent
              options={optionsProgram}
              label="Program"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "program", setFormData)
              }
              onBlur={() => handleSelectBlur("program", formData.program)}
              value={
                optionsProgram?.find(
                  (option) => option.value === formData.program
                ) || null
              }
              name="program"
              placeholder="Select your program"
              required
              errorMessage={formErrors.program}
            />
          </div>

          <div className="flex space-x-4">
            <SelectComponent
              options={optionsRound}
              label="Round"
              onChange={(selectedOption) =>
                handleSelectChange(
                  selectedOption,
                  "round",
                  setFormData,
                  formData
                )
              }
              onBlur={() => handleSelectBlur("round", formData.round)}
              value={
                isRoundDisabled
                  ? (formData.round = "")
                  : optionsRound?.find(
                      (option) => option.value === formData.round
                    ) || null
              }
              name="intake"
              placeholder="Select your round"
              required
              errorMessage={isRoundDisabled === true ? null : formErrors.round}
              disabled={isRoundDisabled}
            />

            <Input
              label="Intake"
              id="intake"
              name="intake"
              value={isIntakeDisabled ? (formData.intake = 0) : formData.intake}
              placeholder="Enter your intake"
              onChange={(e) => handleInputChange(e, setFormData, formData)}
              onBlur={(e) => handleBlur(e)}
              required
              errorMessage={
                isIntakeDisabled === true ? null : formErrors.intake
              }
              type="Number"
              disabled={isIntakeDisabled}
            />
          </div>

          <div>
            <SelectComponent
              options={optionTrack}
              label="Track"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "trackName", setFormData)
              }
              onBlur={() => handleSelectBlur("trackName", formData.trackName)}
              value={
                optionTrack?.find(
                  (option) => option.value === formData.trackName
                ) || null
              }
              name="trackName"
              placeholder="Select your track"
              required
              errorMessage={formErrors.trackName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepEducationDetails;
