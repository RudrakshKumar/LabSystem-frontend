import { useEffect, useState } from "react";

const Problem = ({ id }) => {
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProblem = data.find((q) => q.id === parseInt(id));
        setProblem(foundProblem);
      })
      .catch((error) => console.error("Error fetching problem:", error));
  }, [id]);

  if (!problem) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className="p-4 h-[80vh] text-gray-200">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-semibold">{problem.title}</h1>
      </div>
      <hr className="border-gray-600 mb-4" />

      {/* Problem Description */}
      <p className="problemstat mt-8 mb-4">{problem.description}</p>
    </div>
  );
};

export default Problem;
