
import { Button } from "@/components/ui/button";
import { Github } from "@/components/ui/github";
import {doSocialLogin} from "../app/actions"
const GithubSignIn = () => {
  return (
    <form action={doSocialLogin}>      
    
      <Button className="w-full" variant="outline" type="submit" name="action" value="github">
        <Github />
        Continue with GitHub
      </Button>
    </form>
  );
};

export { GithubSignIn };