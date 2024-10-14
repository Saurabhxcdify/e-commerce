import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    if (!username || !password) {
      setLoading(false);
      setMessage("Please fill out both fields.");
      return;
    }

    // Store username and auth token in sessionStorage
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("authToken", "exampleToken123");

    navigate("/profile");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 transition-all duration-300 flex flex-col">
        <h2 className="text-xl font-bold text-center mb-2">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col h-full">
          <div className="mb-3">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-auto">
            <button
              className="w-full bg-blue-500 text-white py-1.5 rounded-md hover:bg-blue-600 transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          {message && (
            <div className="mt-3">
              <div className="bg-red-500 text-white text-sm p-2 rounded-md" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
