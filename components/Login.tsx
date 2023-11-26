import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" className="border p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;