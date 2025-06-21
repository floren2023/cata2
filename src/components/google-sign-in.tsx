
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import {doSocialLogin} from "../app/actions"
const GoogleSignIn = () => {
  return (
    <form action={doSocialLogin}>      
    
      <Button className="w-full" variant="outline" type="submit" name="action" value="google">
        <FcGoogle />
        Continue with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };