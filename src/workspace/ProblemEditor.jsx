import Editor from './editor';
import '../App.css';
import { useEffect} from "react";
import Problem from "./problem";
import { useParams,useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";


const ProblemEditor = () => {
  const navigate = useNavigate(); // Initialize navigate
  const { isAuthenticated} = useAuth();
  const { id } = useParams();
    useEffect(() => {
      if(!isAuthenticated) 
        navigate("/");
  
    }, []);
  return (
    <>
      <div className="flex">

        <div className='problem-box'>
          <Problem id ={id} />
        </div >

        <div className='editor'>
          <Editor />
        </div>

      </div>
    </>
  );
};

export default ProblemEditor;
