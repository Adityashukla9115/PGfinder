import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600 mt-2">
        Page not found
      </p>
      <Link
        to="/"
        className="mt-4 text-blue-600 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
