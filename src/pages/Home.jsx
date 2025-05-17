import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated,setIsAuthenticated} = useAuth();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if(!isAuthenticated) 
      navigate("/");
    
    fetchQuestions();

  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navigateToProblemEditor = (id) => {
    navigate(`/editor/${id}`); // Navigate to ProblemEditor with question ID
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-xl font-semibold">Question List</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>

      <div className="flex-grow overflow-auto">
        <table className="w-full bg-gray-900 text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Topic</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                <td className="py-3 px-6">{q.id}</td>
                <td className="py-3 px-6 text-blue-400 cursor-pointer hover:underline" onClick={() => navigateToProblemEditor(q.id)}>
                  {q.title}
                </td>
                <td className="py-3 px-6">{q.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
