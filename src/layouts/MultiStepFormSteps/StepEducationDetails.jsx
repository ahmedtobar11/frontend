import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
import { useBranchesAndTracks } from "../../contexts/BranchesAndTracksContext";
import { useEffect } from "react";

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

  const currentYear = new Date().getFullYear();
  const graduationYearOptions = Array.from(
    { length: currentYear - 1993 },
    (_, index) => ({
      value: currentYear - index,
      label: (currentYear - index).toString(),
    })
  );

  const initialIntakeYear = 1980;
  const intakeCount = currentYear - initialIntakeYear;
  const intakeYearsOptions = Array.from(
    { length: intakeCount },
    (_, index) => ({
      value: intakeCount - index,
      label: (intakeCount - index).toString(),
    })
  );

  const PROFESSIONAL_TRAINING = "Professional Training Program - (9 Months)";
  const INTENSIVE_CODE_CAMP = "Intensive Code Camp - (4 Months)";

  const isProfessionalTraining = formData.program === PROFESSIONAL_TRAINING;
  const isIntensiveCodeCamp = formData.program === INTENSIVE_CODE_CAMP;

  const isRoundDisabled = !formData.program || isProfessionalTraining;
  const isIntakeDisabled = !formData.program || isIntensiveCodeCamp;

  // Clear conditional fields when program changes
  useEffect(() => {
    if (formData.program) {
      const updatedFormData = { ...formData };

      if (isProfessionalTraining) {
        updatedFormData.round = "";
      }

      if (isIntensiveCodeCamp) {
        updatedFormData.intake = null;
      }

      if (!formData.program) {
        updatedFormData.round = "";
        updatedFormData.intake = "";
      }

      setFormData(updatedFormData);
    }
  }, [formData.program]);

  const handleProgramChange = (selectedOption) => {
    const newProgram = selectedOption?.value;

    setFormData((prev) => {
      const updated = {
        ...prev,
        program: newProgram,
        round: newProgram === PROFESSIONAL_TRAINING ? "" : prev.round,
        intake: newProgram === INTENSIVE_CODE_CAMP ? "" : prev.intake,
      };
      return updated;
    });
  };

  return (
    <div className="space-y-6 lg:space-y-10">
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
                optionsUniversity.find(
                  (option) => option.value === formData.university
                ) ||
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
                optionsFactualy.find(
                  (option) => option.value === formData.faculty
                ) ||
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
              label="ITI Branch You Graduated From"
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

            <SelectComponent
              options={graduationYearOptions}
              label="Graduation Year from ITI"
              onChange={(selectedOption) =>
                handleSelectChange(
                  selectedOption,
                  "itiGraduationYear",
                  setFormData
                )
              }
              onBlur={() =>
                handleSelectBlur(
                  "itiGraduationYear",
                  formData.itiGraduationYear
                )
              }
              value={
                graduationYearOptions.find(
                  (option) => option.value === formData.itiGraduationYear
                ) || null
              }
              name="itiGraduationYear"
              placeholder="Select your ITI graduation year"
              required
              errorMessage={formErrors.itiGraduationYear}
            />
          </div>

          <div>
            <SelectComponent
              options={optionsProgram}
              label="Program"
              onChange={handleProgramChange}
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
                handleSelectChange(selectedOption, "round", setFormData)
              }
              onBlur={() => handleSelectBlur("round", formData.round)}
              value={
                optionsRound?.find(
                  (option) => option.value === formData.round
                ) || null
              }
              name="round"
              placeholder="Select your round"
              required={!isRoundDisabled}
              errorMessage={isRoundDisabled ? null : formErrors.round}
              disabled={isRoundDisabled}
            />

            <SelectComponent
              options={intakeYearsOptions}
              label="Intake"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "intake", setFormData)
              }
              onBlur={() => handleSelectBlur("intake", formData.intake)}
              value={
                intakeYearsOptions.find(
                  (option) => option.value === formData.intake
                ) || null
              }
              name="intake"
              placeholder="Select your intake"
              required={!isIntakeDisabled}
              errorMessage={isIntakeDisabled ? null : formErrors.intake}
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
