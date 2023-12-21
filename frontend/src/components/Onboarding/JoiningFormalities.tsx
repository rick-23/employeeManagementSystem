import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

interface JoiningFormalitiesProps {
  onSubmit: (values: JoiningFormalitiesData) => void;
}

export interface JoiningFormalitiesData {
  orientation: boolean;
  sexualHarassmentTraining: boolean;
  hazardousItemsManagementTraining: boolean;
  firstAidTraining: boolean;
  fireDrillTraining: boolean;
  companyPoliciesTraining: boolean;
}

const validationSchema = Yup.object().shape({
  orientation: Yup.boolean().oneOf([true], "Orientation is required"),
  sexualHarassmentTraining: Yup.boolean().oneOf(
    [true],
    "Sexual Harassment Training is required"
  ),
  hazardousItemsManagementTraining: Yup.boolean().oneOf(
    [true],
    "Hazardous Items Management Training is required"
  ),
  firstAidTraining: Yup.boolean().oneOf(
    [true],
    "First Aid Training is required"
  ),
  fireDrillTraining: Yup.boolean().oneOf(
    [true],
    "Fire Drill Training is required"
  ),
  companyPoliciesTraining: Yup.boolean().oneOf(
    [true],
    "Company Policies Training is required"
  ),
});

const JoiningFormalities: React.FC<JoiningFormalitiesProps> = ({
  onSubmit,
}) => {
  const initialValues: JoiningFormalitiesData = {
    orientation: false,
    sexualHarassmentTraining: false,
    hazardousItemsManagementTraining: false,
    firstAidTraining: false,
    fireDrillTraining: false,
    companyPoliciesTraining: false,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="orientation" className="inline-flex items-center">
              <Field
                type="checkbox"
                id="orientation"
                name="orientation"
                className="form-checkbox"
              />
              <span className="ml-2">Orientation</span>
            </label>
          </div>

          <div>
            <label
              htmlFor="sexualHarassmentTraining"
              className="inline-flex items-center"
            >
              <Field
                type="checkbox"
                id="sexualHarassmentTraining"
                name="sexualHarassmentTraining"
                className="form-checkbox"
              />
              <span className="ml-2">Sexual Harassment Training</span>
            </label>
          </div>

          <div>
            <label
              htmlFor="hazardousItemsManagementTraining"
              className="inline-flex items-center"
            >
              <Field
                type="checkbox"
                id="hazardousItemsManagementTraining"
                name="hazardousItemsManagementTraining"
                className="form-checkbox"
              />
              <span className="ml-2">Hazardous Items Management Training</span>
            </label>
          </div>

          <div>
            <label
              htmlFor="firstAidTraining"
              className="inline-flex items-center"
            >
              <Field
                type="checkbox"
                id="firstAidTraining"
                name="firstAidTraining"
                className="form-checkbox"
              />
              <span className="ml-2">First Aid Training</span>
            </label>
          </div>

          <div>
            <label
              htmlFor="fireDrillTraining"
              className="inline-flex items-center"
            >
              <Field
                type="checkbox"
                id="fireDrillTraining"
                name="fireDrillTraining"
                className="form-checkbox"
              />
              <span className="ml-2">Fire Drill Training</span>
            </label>
          </div>

          <div>
            <label
              htmlFor="companyPoliciesTraining"
              className="inline-flex items-center"
            >
              <Field
                type="checkbox"
                id="companyPoliciesTraining"
                name="companyPoliciesTraining"
                className="form-checkbox"
              />
              <span className="ml-2">Company Policies Training</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default JoiningFormalities;
