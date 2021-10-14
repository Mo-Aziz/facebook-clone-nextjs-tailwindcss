import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZWJvb2slMjBpY29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1 onClick={signIn} className="p-5 text-white text-center bg-blue-500 rounded-full cursor-pointer">Login with Facebook</h1>
    </div>
  );
}

export default Login
