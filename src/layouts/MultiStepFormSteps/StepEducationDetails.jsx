import Input from "../../components/Ui/Input";
import {
  handleInputChange,
  handleSelectChange,
} from "../../services/registerFormUtils";
import Data from "../../SelectOption.json";
import SelectComponent from "../../components/Ui/SelectComponent";
import tracksApiRequest from "../../services/apiRequests/tracksApiRequest";
import { useEffect, useState } from "react";
const StepEducationDetails = ({
  formData,
  setFormData,
  formErrors,
  handleBlur,
  handleSelectBlur,
}) => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tracks = await tracksApiRequest.getAllTracks();
      setTracks(tracks);

      // const branches = await branchesApiRequest.getAllBranches();
      // setBranches(branches); , etc...
    };

    fetchData();
  }, []);

  const optionsUniversity = Data.Universities?.map((university) => ({
    value: university.value,
    label: university.label,
  }));
  const optionsFactualy = Data.faculties?.map((facultie) => ({
    value: facultie.value,
    label: facultie.label,
  }));

  const optionTrack = Array.from(
    new Set(tracks?.map((track) => track?.name))
  ).map((name) => ({
    value: name,
    label: name,
  }));

  return (
    <div className="space-y-10">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Education Details
      </h1>
      <div className="w-max-xl md:px-10 pb-5">
        <div>
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
              ) || { value: formData.university, label: formData.university }
            }
            name="university"
            placeholder="university"
            isCreatable
            required
            errorMessage={formErrors.university}
          />
        </div>

        <div>
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
              ) || {
                value: formData.faculty,
                label: formData.faculty,
              }
            }
            name="faculty"
            placeholder="faculty"
            isCreatable
            required
            errorMessage={formErrors.faculty}
          />
        </div>

        <div>
          <SelectComponent
            options={optionTrack}
            label="Branch you have Graadute from"
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "branch", setFormData)
            }
            onBlur={() => handleSelectBlur("branch", formData.branch)}
            value={
              optionTrack?.find((option) => option.value === formData.branch) ||
              null
            }
            name="branch"
            placeholder="branch"
            required
            errorMessage={formErrors.branch}
          />

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
              placeholder="trackName"
              required
              errorMessage={formErrors.trackName}
            />
          </div>

          <div>
            <Input
              label=" Graduation Year From ITI"
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={(e) => handleInputChange(e, setFormData)}
              onBlur={(e) => handleBlur(e)}
              required
              errorMessage={formErrors.graduationYear}
              type="Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepEducationDetails;
