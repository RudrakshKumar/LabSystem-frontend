import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "http://localhost:8080", // Base URL without `/execute`
});

export const executeCode = async (language, sourceCode) => {
  //console.log(sourceCode);

  // Preparing the payload according to the curl format
  const payload = {
    language: language,
    code: sourceCode,  // Only `code` is required, not `files`
  };

  // Making the POST request to the `/execute` endpoint
  const response = await API.post("/execute", payload, {
    headers: {
      "Content-Type": "application/json", // Ensuring content type is JSON
    },
  });

  return {
    output: response.data.output.split("\n"), // Split output by newline
    stderr: response.data.error, // Handle any errors (stderr)
  };
};
