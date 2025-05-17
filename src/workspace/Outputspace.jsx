import PropTypes from "prop-types";


// const Outputspace = ({isError,output}) => {
//   return (
//     <div>
//         <div className={`z-3 h-[30vh] p-2 overflow-auto border rounded-md ${
//         isError ? "text-red-400 border-red-500" : "text-gray-200 border-gray-700"
//         }`}
//         >
//             {output
//             ? output.map((line, i) => (
//                 <p key={i} className="whitespace-pre-wrap">
//                     {line}
//                 </p>
//                 ))
//             : 'Running . . . '}
//         </div>
//     </div>
//   )
// }
const Outputspace = ({isError,output}) => {
  return (
    <div>
        <div className={`z-3 h-[30vh] p-2 overflow-auto border rounded-md ${
        isError ? "text-red-400 border-red-500" : "text-gray-200 border-gray-700"
        }`}
        >
            {output
            ? output.map((line, i) => (
                <p key={i} className="whitespace-pre-wrap">
                    {line}
                </p>
                ))
            : 'Running . . . '}
        </div>
    </div>
  )
}

Outputspace.propTypes = {
    isError: PropTypes.func.isRequired,
    output:PropTypes.any.isRequired
  };

export default Outputspace
