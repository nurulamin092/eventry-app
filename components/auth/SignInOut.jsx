"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();

  const route = useRouter();

  const logout = () => {
    setAuth(null);

    route.push("/login");
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">Hello,{auth.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logout}>
            Log out
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;
