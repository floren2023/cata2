
import { Button } from "@/components/ui/button";
import { Github } from "@/components/ui/github";
import {doSocialLogin} from "../app/actions"
const GithubSignIn = () => {
  return (
    <form action={doSocialLogin}>      
    
      <Button className="w-full text-sm " variant="outline" type="submit" name="action" value="github">
        <Github />
        With GitHub
      </Button>
    </form>
  );
};

export { GithubSignIn };