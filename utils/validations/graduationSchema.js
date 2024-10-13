import * as Yup from "yup";

const stepValidationSchemas = [
  Yup.object().shape({
    fullName: Yup.string().required("Full Name is required."),
    personalPhoto: Yup.string().required("Personal Photo is required."),
    email: Yup.string()
      .matches(
        /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address."
      )
      .required("Email is required."),
    mobile: Yup.string()
      .matches(
        /^(010|011|012|015)\d{8}$/,
        "Please enter a valid Egyptian phone number (e.g., 01012345678)."
      )
      .required("Mobile number is required."),
    linkedin: Yup.string().url().optional(),
    cityOfBirth: Yup.string().required("City of birth is required."),
  }),

  Yup.object().shape({
    faculty: Yup.string().required("Faculty is required."),
    university: Yup.string().required("University is required."),
    trackName: Yup.string().required("Track name is required."),
    branch: Yup.string().required("Branch is required."),
    program: Yup.string()

      .oneOf(
        [
          "Professional Training Program - (9 Months)",
          "Intensive Code Camp - (4 Months)",
        ],
        "Program must be either Professional Training Program - (9 Months) or Intensive Code Camp - (4 Months)."
      )
      .required("Program is required."),
    itiGraduationYear: Yup.number()
      .required("ITI Graduation Year is required.")
      .min(2000, "Graduation year must be after 2000.")
      .max(
        new Date().getFullYear(),
        `Graduation year must be less than or equal to ${new Date().getFullYear()}.`
      ),
    intake: Yup.string().required("Intake is required."),
  }),

  Yup.object().shape({
    preferredTeachingBranches: Yup.array()
      .of(Yup.string())
      .min(
        1,
        "You have to include at least one branch you're interested to teach in!"
      )
      .required("Preferred teaching branches are required"),
    preferredCoursesToTeach: Yup.string().optional(),
    interestedInTeaching: Yup.string()
      .oneOf(
        ["Business sessions", "Courses"],
        "Please specify a valid teaching interest (Business sessions or Courses)."
      )
      .required("Teaching interest is required."),
  }),

  Yup.object().shape({
    fullJobTitle: Yup.string().optional(),
    companyName: Yup.string().optional(),
    yearsOfExperience: Yup.number().optional(),
    hasFreelanceExperience: Yup.boolean().required(
      "Please specify if you have worked as a freelancer before."
    ),
  }),
];

export default stepValidationSchemas;
