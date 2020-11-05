import { SignInUserDocument } from "api/graphql";
import type {
  SignInUserMutation,
  SignInUserMutationVariables,
} from "api/graphql";
import { client } from "client";
import type { GraphQLError } from "graphql";
import { useState } from "react";
import { useMutation } from "react-query";
import type { QueryStatus } from "react-query";

type UseSignInResponse = {
  status: QueryStatus;
  message: string;
  signIn: (email: string, password: string) => void;
};

export const useSignIn = (): UseSignInResponse => {
  const [message, setMessage] = useState("");
  const [mutate, result] = useMutation<
    SignInUserMutation,
    GraphQLError,
    SignInUserMutationVariables
  >(
    async (variables) => {
      const res = await client.request(SignInUserDocument, variables);
      return res;
    },
    {
      onError: (err) => {
        setMessage(err.message);
      },
    }
  );

  const signIn = async (email: string, password: string) => {
    const res = await mutate({ email, password });
    if (res?.signInUser?.errors && res.signInUser.errors.length !== 0) {
      setMessage("メールアドレスかパスワードが間違っています");
      return;
    }
  };

  return { signIn, status: result.status, message };
};
