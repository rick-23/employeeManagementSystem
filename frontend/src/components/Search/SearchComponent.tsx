import React from "react";
import DatePicker from "react-datepicker";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const SearchComponent = () => {
  const handleDateChange = (date: Date) => {
    // Handle date change logic here
    console.log("Selected date:", date);
  };
  return (
    <div className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        {/* <Link to="/" className="text-white text-lg font-semibold"> */}
        ECMS
        {/* </Link> */}
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="candidateSearch" className="text-white">
              Search Candidates
            </label>
            <input
              type="text"
              id="candidateSearch"
              placeholder="Enter candidate name"
              className="p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="interviewDate" className="text-white">
              Search Interviews on a Specific Date
            </label>
            <DatePicker
              id="interviewDate"
              className="p-2 border rounded-md"
              selected={null}
              onChange={handleDateChange}
              placeholderText="Select date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
