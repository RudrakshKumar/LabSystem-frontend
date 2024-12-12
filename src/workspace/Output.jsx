import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { executeCode } from "../api";
import PropTypes from "prop-types";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      toast.error("No code to execute. Please write some code!");
      return;
    }
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while running the code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2">
      <button
        className={`mb-4 px-4 py-2 rounded-md border text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[75vh] p-2 overflow-auto border rounded-md ${
          isError ? "text-red-400 border-red-500" : "text-gray-200 border-gray-700"
        }`}
      >
        {output
          ? output.map((line, i) => (
              <p key={i} className="whitespace-pre-wrap">
                {line}
              </p>
            ))
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

Output.propTypes = {
    language: PropTypes.string.isRequired,
    editorRef: PropTypes.shape({
      current: PropTypes.any, // You can be more specific if you know the type
    }).isRequired,
  };

export default Output;
