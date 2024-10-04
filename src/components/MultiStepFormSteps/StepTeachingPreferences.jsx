/* eslint-disable react/prop-types */
import Input from "../Ui/Input";
import { handleInputChange } from "../submitFormData/formFunctions";

const StepTeachingPreferences = ({ formData, setFormData ,formErrors}) => {
  return (
    <div className=" space-y-12">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Teaching Preferences
      </h1>

      <div>
        <Input
          label="which teaching Branches you prefer"
          id="teachingBranches"
          name="teachingBranches"
          value={formData.teachingBranches}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
          errorMessage={formErrors.teachingBranches}
        />
      </div>
      <div>
        <Input
          label="which teaching Courses you prefer"
          id="preferredCourses"
          name="preferredCourses"
          value={formData.preferredCourses}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
          errorMessage={formErrors.preferredCourses}
        />
      </div>
    </div>
  );
};

export default StepTeachingPreferences;
