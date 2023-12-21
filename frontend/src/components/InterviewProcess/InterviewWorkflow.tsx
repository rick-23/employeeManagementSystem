import React from "react";

interface Candidate {
  id: string;
  name: string;
  status: string;
}

const candidatesData: Candidate[] = [
  { id: "1", name: "John Doe", status: "Pending Round 1" },
  { id: "2", name: "Jane Doe", status: "Passed Round 2" },
  { id: "3", name: "Alice Smith", status: "Rejected at Round 2" },
  // Add more candidates as needed
];

const getStatusColorClass = (status: string) => {
  if (status.toLowerCase().includes("pending")) {
    return "text-blue-500";
  } else if (status.toLowerCase().includes("passed")) {
    return "text-green-500";
  } else if (status.toLowerCase().includes("rejected")) {
    return "text-red-500";
  } else {
    return "";
  }
};

const InterviewWorkflow = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Interview Workflow</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Candidate Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidatesData.map((candidate) => (
            <tr key={candidate.id}>
              <td className="py-2 px-4 border-b">{candidate.name}</td>
              <td
                className={`py-2 px-4 border-b ${getStatusColorClass(
                  candidate.status
                )}`}
              >
                {candidate.status}
              </td>
              <td className="py-2 px-4 border-b">
                {candidate.status.toLowerCase().includes("rejected") ? null : (
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => handleAssignButtonClick(candidate)}
                  >
                    Assign
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleAssignButtonClick = (candidate: Candidate) => {
  // Handle the Assign button click logic here
  console.log(`Assigning interview for candidate: ${candidate.name}`);
};

export default InterviewWorkflow;
