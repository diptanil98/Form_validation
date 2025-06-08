import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Submitted Details
      </h2>
      <ul className="space-y-2">
        {Object.entries(state).map(([key, value]) => (
          <li key={key} className="border-b border-gray-200 py-2">
            <span className="font-semibold capitalize text-gray-700">{key}:</span>{" "}
            <span className="text-gray-800">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
