import React from "react";

function Login() {
  return (
    <div className="login-container flex flex-column justify-center ">
      <div className="flex flex-col items-center border-2 rounded-lg border-red-300 justify-start p-8 shadow-lg shadow-slate-400">
        <input
          type="text"
          className="min-w-72 text-lg my-3 h-10"
          placeholder="usesrname"
        />
        <input
          type="password"
          className="min-w-72 my-3 h-10"
          placeholder="password"
        />
        <input
          type="button"
          className="border-2 cursor-pointer border-red-300 p-2 rounded-xl my-3 bg-red-300 text-white min-w-52"
          value="Login"
        />
      </div>
    </div>
  );
}

export default Login;
