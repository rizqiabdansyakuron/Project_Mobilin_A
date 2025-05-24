import { Link } from "react-router-dom";

export default function Erormobilin() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Oops....</h1>
        <h2 className="text-6xl font-bold text-gray-800 mb-4">Error 404</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or might have been removed.
          <br />
          We suggest you go back to home.
        </p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700">
          ← Back to Home
        </Link>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center text-8xl font-bold text-gray-800">
            <img src="/image-removebg-preview.png" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
