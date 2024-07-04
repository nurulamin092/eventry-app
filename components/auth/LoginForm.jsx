"use client";

import { performLogin } from "@/app/actions";
import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState("");

  const { setAuth } = useAuth();

  const route = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        route.push("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="my-2 text-red-500">{error.message}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
