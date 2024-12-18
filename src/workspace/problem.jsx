const Problem = () => {
  return (
    <div className="p-4 h-[80vh]  text-gray-200 ">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-semibold ">Star Pattern Problem</h1>
      </div>
      <hr className="border-gray-600 mb-4" />

      {/* Problem Description */}
      <p className="problemstat mt-8 mb-4">
        Print a star pattern in the form of a right-angled triangle for a given
        number of rows <b>n</b>. The first row will contain 1 star, the second row
        2 stars, and so on.
      </p>

      {/* Example Section */}
      <div className="p-3 mt-10 bg-gray-800 rounded-md border border-gray-700">
        <p className="text-green-400 mb-2 font-semibold">Output:</p>
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>
            *{"\n"}
            **{"\n"}
            ***{"\n"}
            ****{"\n"}
            *****
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Problem;
