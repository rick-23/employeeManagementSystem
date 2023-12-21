import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PersonalInformationProps {
  onSubmit: (values: PersonalInformationFormData) => void;
}

export interface PersonalInformationFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  dateOfJoining: Date;
  employeeId: number;
  phoneNumber: string;
  email: string;
  userName: string;
  workstationNumber: string;
  idCardNumber: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  dateOfJoining: Yup.date().required("Date of Joining is required"),
  employeeId: Yup.string()
    .matches(/^[0-9]{5}$/, "Employee ID must be exactly 5 digits")
    .required("Employee ID is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  userName: Yup.string()
    .required("User Name is required")
    .max(8, "User Name must be at most 8 characters"),
  workstationNumber: Yup.string()
    .required("Workstation Number is required")
    .max(8, "Work Station Number must be at most 8 characters"),
  idCardNumber: Yup.string()
    .required("ID Card Number is required")
    .max(10, "ID Card number must be at most 10 characters"),
});

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  onSubmit,
}) => {
  const initialValues: PersonalInformationFormData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    dateOfJoining: new Date(),
    employeeId: 0,
    phoneNumber: "",
    email: "",
    userName: "",
    workstationNumber: "",
    idCardNumber: "",
  };

  // State and logic for the onboarding process can be added here
  return (
    <div className="container m-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <Field
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="dateOfJoining"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Joining
              </label>
              <Field
                type="date"
                id="dateOfJoining"
                name="dateOfJoining"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="dateOfJoining"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="phoneNumber"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="employeeId"
                className="block text-sm font-medium text-gray-700"
              >
                EmployeeID
              </label>
              <Field
                type="number"
                id="employeeId"
                name="employeeId"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="employeeId"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <Field
                type="text"
                id="userName"
                name="userName"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="userName"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="workstationNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Workstation Number
              </label>
              <Field
                type="text"
                id="workstationNumber"
                name="workstationNumber"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="workstationNumber"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="idCardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                IDCard Number
              </label>
              <Field
                type="text"
                id="idCardNumber"
                name="idCardNumber"
                className="form-input mt-1 block w-full"
              />
              <ErrorMessage
                name="idCardNumber"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInformation;
