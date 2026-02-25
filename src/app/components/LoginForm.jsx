"use client"; 

function LoginForm({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      // temporary onSubmit for testing ChuckNorris
      onSubmit={(e) =>  {
        // replace this with validation/API call
        e.preventDefault();
        onLogin("dev-token");
      }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Chuck Norris Facts</h2>

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Username</p>
        <input
          type="text"
          placeholder="Enter username"
          className="text-gray-700 w-full mb-4 p-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Password</p>
        <input
          type="password"
          placeholder="Enter password"
          className="text-gray-700 w-full mb-6 p-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
