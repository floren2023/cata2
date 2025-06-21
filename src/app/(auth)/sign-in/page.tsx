import { GithubSignIn } from "../../../components/github-sign-in";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { GoogleSignIn } from "@/components/google-sign-in";
import Login from "./login";

const Page = async () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-10 border-1 border-red-700 mt-10 rounded-md shadow1">
      <h1 className="text-2xl font-bold text-center mb-6 text-red-800">
        Sign In
      </h1>

      <div className=" flex justify-center text-sm   gap-4  ">
        <GithubSignIn />
        <GoogleSignIn />
      </div>

      {/* Email/Password Sign In */}
      <Login />
      <div className="text-center">
        <Button
          asChild
          variant="link"
          className="text-gray-500 italic font-thin"
        >
          <Link href="/sign-up">
            Don&apos;t have an account?{" "}
            <span className="text-red-700 italic font-thin">Sign up</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
