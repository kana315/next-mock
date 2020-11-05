import { useSignIn } from "hooks/mutation/useSignIn";
import type React from "react";

const Login: React.FC = () => {
  const { signIn, status, message } = useSignIn();

  const onSubmit = () => {
    signIn("test@example.com", "password");
  };

  return (
    <div>
      <button onClick={onSubmit}>ログイン</button>
      <p>status: {status}</p>
      <p>message: {message}</p>
    </div>
  );
};

export default Login;
