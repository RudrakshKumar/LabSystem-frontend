import { useRef, useState} from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";
import PropTypes from "prop-types";
import LanguageSelector from "./LanguageSelector";
import { executeCode } from "../api";
import { toast } from "react-toastify";
// import Outputbar from "./Outputbar";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [flag, setflag] = useState(0);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

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
        <div className="h-1/2 relative">
      {/* Left Panel */}
      <div className="languagediv w-full mb-2">
        <LanguageSelector language={language} onSelect={onSelect} />
        <hr className="border-gray-600 mb-4" />
      </div>

      <div className="coderdiv w-full mt-2 relative">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="62vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>

      {flag === 1 && (
          <div
            className={`outputdiv absolute bottom-full left-0 right-0 z-50 h-[62vh] p-2 overflow-auto border rounded-md ${
              isError
                ? "text-red-400 border-red-500 "
                : "text-gray-200 border-gray-700 "
            } ${isLoading ?"bg-gray-700" : "bg-gray-900"}`}
          >
            {output
              ? output.map((line, i) => (
                  <p key={i} className="whitespace-pre-wrap">
                    {line}
                  </p>
                ))
              : "Running . . . "}
          </div>
        )}


      <nav className="p-3 bg-gray-800 mt-4 ">
        <div className="max-w-full h-7 mx-auto flex justify-between items-center w-full ">
          <div className="flex justify-end w-full space-x-4">
            {flag === 1 && (
              <button
                className={`px-4 py-2 rounded-md border text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring focus:ring-green-400 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
                onClick={() => {
                  setflag(0);
                  setOutput(null);
                }}
              >
                Close
              </button>
            )}
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
            >
              {isLoading ? "Submit Code" : "Submit Code"}
            </button>
          </div>
        </div>
      </nav>
    </div>

  );
};

CodeEditor.propTypes = {
  language: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default CodeEditor;
