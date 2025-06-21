
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GithubSignIn } from "@/components/github-sign-in";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-10 border-1 border-red-700 mt-10 rounded-md shadow1">
      <h1 className="text-2xl font-bold text-center mb-6 text-red-800">Create Account</h1> 

      {/* Email/Password Sign Up */}
      <form
        className="space-y-4"
       
      >
         <Input
          name="name"
          placeholder="Name"
          type="text"
          required
          autoComplete="name"
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="new-password"
        />
        <Button className="w-full bg-red-900 text-white hover:bg-red-800" type="submit">
          Sign Up
        </Button>
      </form>

      <div className="text-center text-sm italic font-thin ">
        <Button asChild variant="link">
          <Link href="/sign-in">Already have an account?<span className="text-red-800">Sign in</span> </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;