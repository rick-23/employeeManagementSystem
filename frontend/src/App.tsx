import React from "react";
import "./styles/App.css";
import SearchComponent from "./components/Search/SearchComponent";
import CandidateRegistration from "./components/InterviewProcess/CandidateRegistration";
import InterviewWorkflow from "./components/InterviewProcess/InterviewWorkflow";
import Onboarding from "./components/Onboarding/Onboarding";

function App() {
  return (
    <div className="App">
      <SearchComponent />
      {/* <CandidateRegistration /> */}
      {/* <InterviewWorkflow /> */}
      <Onboarding />
    </div>
  );
}

export default App;
