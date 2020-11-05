import type { GetFormQuery } from "api/graphql";
import { GetFormDocument } from "api/graphql";
import { client } from "client";
import type { GraphQLError } from "graphql";
import { useQuery } from "react-query";

type UseGetFormResponse = {
  data: GetFormQuery | undefined;
  isFetching: boolean;
  error: string | undefined | null;
  refetch: () => void;
};

export const useGetForm = (): UseGetFormResponse => {
  const getForm = useQuery<GetFormQuery, GraphQLError>(
    "getForm",
    async () => {
      const data = await client.request(GetFormDocument);
      return data;
    },
    { onError: (error) => console.error("error", error.message) }
  );
  const { refetch, data, isFetching, error } = getForm;

  return {
    data,
    isFetching: isFetching,
    error: error?.message,
    refetch,
  };
};
