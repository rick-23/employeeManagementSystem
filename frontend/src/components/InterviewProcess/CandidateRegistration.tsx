import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

interface ExperienceOption {
  value: string;
  label: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  email: "",
  mobileNumber: "",
  primarySkills: "",
  secondarySkills: "",
  experienceYears: "",
  experienceMonths: "",
  resume: null,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.date().nullable().required("Date of Birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  primarySkills: Yup.string().required("Primary Skills are required"),
  experienceYears: Yup.string().required("Experience is required"),
  experienceMonths: Yup.string().required("Experience is required"),
  resume: Yup.mixed().required("Resume is required"),
});

const experienceYearsOptions: ExperienceOption[] = Array.from(
  { length: 30 },
  (_, i) => ({
    value: String(i),
    label: `${i} ${i === 1 ? "year" : "years"}`,
  })
);

const experienceMonthsOptions: ExperienceOption[] = Array.from(
  { length: 12 },
  (_, i) => ({
    value: String(i),
    label: `${i} ${i === 1 ? "month" : "months"}`,
  })
);

const CandidateRegistration = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission logic
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-600"
          >
            First Name
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-600"
          >
            Last Name
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-600"
          >
            Date of Birth
          </label>
          <Field
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="dateOfBirth"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile Number
          </label>
          <Field
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="mobileNumber"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="experienceYears"
            className="block text-sm font-medium text-gray-600"
          >
            Experience (Years)
          </label>
          <Field
            as={Select}
            options={experienceYearsOptions}
            id="experienceYears"
            name="experienceYears"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="experienceYears"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="experienceMonths"
            className="block text-sm font-medium text-gray-600"
          >
            Experience (Months)
          </label>
          <Field
            as={Select}
            options={experienceMonthsOptions}
            id="experienceMonths"
            name="experienceMonths"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="experienceMonths"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-600"
          >
            Resume
          </label>
          <Field
            type="file"
            id="resume"
            name="resume"
            className="mt-1 p-2 border rounded-md w-full"
          />
          <ErrorMessage
            name="resume"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CandidateRegistration;
