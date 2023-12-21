import React from "react";
import {
  Formik,
  Field,
  FieldArray,
  ErrorMessage,
  Form,
  useFormikContext,
} from "formik";
import * as Yup from "yup";

interface AssetInformationProps {
  onSubmit: (values: AssetInformationData) => void;
}

export interface AssetInformationData {
  assets: Asset[];
}

interface Asset {
  assetType: string;
  assetName: string;
  serialNumber: string;
}

const validationSchema = Yup.object().shape({
  assets: Yup.array()
    .of(
      Yup.object().shape({
        assetType: Yup.string().required("Asset Type is required"),
        assetName: Yup.string().required("Asset Name is required"),
        serialNumber: Yup.string().required("Serial Number is required"),
      })
    )
    .required("At least one asset is required"),
});

const AssetForm: React.FC<AssetInformationProps> = ({ onSubmit }) => {
  const { values } = useFormikContext<AssetInformationData>();

  const addAsset = (push: any) => {
    push({ assetType: "", assetName: "", serialNumber: "" });
  };

  return (
    <Form className="space-y-4">
      <FieldArray name="assets">
        {({ push, remove }) => (
          <div>
            {values.assets.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div>
                  <label
                    htmlFor={`assets[${index}].assetType`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Asset Type
                  </label>
                  <Field
                    type="text"
                    id={`assets[${index}].assetType`}
                    name={`assets[${index}].assetType`}
                    className="form-input mt-1 block w-full"
                  />
                  <ErrorMessage
                    name={`assets[${index}].assetType`}
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`assets[${index}].assetName`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Asset Name
                  </label>
                  <Field
                    type="text"
                    id={`assets[${index}].assetName`}
                    name={`assets[${index}].assetName`}
                    className="form-input mt-1 block w-full"
                  />
                  <ErrorMessage
                    name={`assets[${index}].assetName`}
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`assets[${index}].serialNumber`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Serial Number
                  </label>
                  <Field
                    type="text"
                    id={`assets[${index}].serialNumber`}
                    name={`assets[${index}].serialNumber`}
                    className="form-input mt-1 block w-full"
                  />
                  <ErrorMessage
                    name={`assets[${index}].serialNumber`}
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="flex items-center justify-center">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 focus:outline-none"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => addAsset(push)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Asset
              </button>
            </div>
          </div>
        )}
      </FieldArray>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>
    </Form>
  );
};

const AssetInformation: React.FC<AssetInformationProps> = ({ onSubmit }) => {
  const initialValues: AssetInformationData = {
    assets: [{ assetType: "", assetName: "", serialNumber: "" }],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AssetForm onSubmit={onSubmit} />
    </Formik>
  );
};

export default AssetInformation;
