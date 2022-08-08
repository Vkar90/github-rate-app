import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    uri: Constants.manifest.extra.APOLLO_URI,
    cache: new InMemoryCache(),
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export default createApolloClient;
