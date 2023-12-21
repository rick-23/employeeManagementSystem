// import React, { useState } from "react";
// import AssetInformation from "./AssetInformation";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import PersonalInformation, {
  PersonalInformationFormData,
} from "./PersonalInformation";
import AssetInformation, { AssetInformationData } from "./AssetInformation";
import JoiningFormalities, {
  JoiningFormalitiesData,
} from "./JoiningFormalities";

const Onboarding = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Accordion allowZeroExpanded>
        <AccordionItem className="border-b">
          <AccordionItemButton className="focus:outline-none">
            <h3 className="text-lg font-semibold text-blue-500">
              Personal Information
            </h3>
          </AccordionItemButton>
          <AccordionItemPanel className="p-4 bg-gray-100">
            {/* Content for Personal Information section */}
            <PersonalInformation
              onSubmit={(values: PersonalInformationFormData) =>
                console.log(values)
              }
            />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="border-b">
          <AccordionItemButton className="focus:outline-none">
            <h3 className="text-lg font-semibold text-blue-500">
              Asset Information
            </h3>
          </AccordionItemButton>
          <AccordionItemPanel className="p-4 bg-gray-100">
            {/* Content for Asset Information section */}
            <AssetInformation
              onSubmit={(values: AssetInformationData) => console.log(values)}
            />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemButton className="focus:outline-none">
            <h3 className="text-lg font-semibold text-blue-500">
              Onboarding Information
            </h3>
          </AccordionItemButton>
          <AccordionItemPanel className="p-4 bg-gray-100">
            {/* Content for Onboarding Information section */}
            <JoiningFormalities
              onSubmit={(values: JoiningFormalitiesData) => console.log(values)}
            />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Onboarding;
