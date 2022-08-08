import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  let variables = {};

  const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    ...result,
  };
};

export default useRepositories;
