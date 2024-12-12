import Problem from './workspace/problem';
import Editor from './workspace/editor';
import './App.css';
import Navbar from './workspace/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <div className="flex">

        <div className='problem-box'>
          <Problem />
        </div >

        <div className='editor'>
          <Editor />
        </div>

      </div>
    </>
  );
}

export default App;
