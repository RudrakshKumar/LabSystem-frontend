import { useRef, useState} from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";
import PropTypes from "prop-types";
import Output from "./Output";
import LanguageSelector from "./LanguageSelector";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="h-1/2">
      {/* Left Panel */}
      <div className="languagediv w-full mb-2">
        <LanguageSelector language={language} onSelect={onSelect} />
        <hr/>
      </div>
      <div className="coderdiv w-full mt-2">
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

      {/* Right Panel */}
      <div className="w-full p-4">
        <Output editorRef={editorRef} language={language} />
      </div>
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
