import { useState } from "react";
import { executeCode } from "../api";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Outputspace from "./Outputspace";

const Outputbar = ({ editorRef, language }) => {

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [flag, setflag] = useState(0);
  
    const runCode = async () => {
      const sourceCode = editorRef.current.getValue();
      setflag(1);
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
        <>
            
            {flag == 1 ? <Outputspace isError={isError} output={output}/> : <div/>}

            <nav className="p-3 mt-4 shadow-md">
            <div className="max-w-full mx-auto flex justify-between items-center w-full">
                <div className="flex justify-end w-full space-x-4">
                    {flag == 1 ? <button
                        className={`px-4 py-2 rounded-md border text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring focus:ring-green-400 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading}
                        onClick={()=>{setflag(0) || setOutput(null)}}
                    >
                        Close
                    </button> : <div/>}
                    <button
                        className={`px-4 py-2 rounded-md border text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading}
                        onClick={runCode}
                    >
                        {isLoading ? "Running..." : "Run Code"}
                    </button>

                    <button
                        className={`px-4 py-2 rounded-md border text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading}
                        // onClick={runCode}
                    >
                        {isLoading ? "Submitting..." : "Submit Code"}
                    </button>
                </div>
            </div>
            </nav>
            
        </>
    )
}

Outputbar.propTypes = {
    language: PropTypes.string.isRequired,
    editorRef: PropTypes.shape({
      current: PropTypes.any, // You can be more specific if you know the type
    }).isRequired,
  };

export default Outputbar
