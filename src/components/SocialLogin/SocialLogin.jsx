import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/utils";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogleLogin = async () => {
    const { user } = await signInWithGoogle(googleProvider);

    const userData = {
      name: user.displayName,

      email: user.email,
      role: "user",
    };
    const storeUser = await saveUser(userData);
    if (storeUser?.acknowledged) {
      toast.success("Sign up successfully");
      navigate("/");
    } else {
      toast.success("Login successful");
      navigate(state ? state : "/");
    }
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialLogin;
