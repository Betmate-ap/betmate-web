import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
});

const errorLink = onError((error) => {
  const e = error as unknown as {
    graphQLErrors?: Array<{ message: string; extensions?: Record<string, unknown> }>;
    networkError?: unknown;
  };

  e.graphQLErrors?.forEach(({ message, extensions }) => {
    console.error(`[GraphQL error] ${extensions?.["code"] ?? "UNKNOWN"}: ${message}`);
  });

  if (e.networkError) {
    console.error(`[Network error]: ${e.networkError}`);
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "cache-and-network" },
  },
});
