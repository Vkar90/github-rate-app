import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const myResult = await mutate({
      variables: { input: { username, password } },
    });
    await authStorage.setAccessToken(myResult.data.authorize.accessToken);
    apolloClient.resetStore();
    return myResult;
  };

  return [signIn, result];
};

export default useSignIn;
