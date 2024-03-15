"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

interface IRootTemplate extends PropsWithChildren {
  pageProps: Record<string, any>;
}

export default function RootTemplate({ children, pageProps }: IRootTemplate) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
