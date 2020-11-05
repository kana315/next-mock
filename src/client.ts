import { GraphQLClient } from "graphql-request";

const url = "http://localhost:3001/graphql";

const getToken = () => {
  if (!process.browser) return;
  const token = localStorage.getItem("token");
  return token;
};

export const client = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${getToken()}`,
  },
});
