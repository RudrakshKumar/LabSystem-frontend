import { useState } from "react";

const Outputbar = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <nav className="p-3 mt-2 shadow-md">
        <div className="max-w-full mx-auto flex justify-between items-center w-full">
        <button
            className={`mb-4 px-4 py-2 rounded-md border text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
            // onClick={runCode}
        >
            {isLoading ? "Running..." : "Run Code"}
            </button>
        </div>
        </nav>
    )
}

export default Outputbar
