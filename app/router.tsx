import { routeTree } from "./routeTree.gen";
import { MutationCache, QueryClient } from "@tanstack/react-query";
import { RouterErrorComponent } from "./lib/tanstack/router/routerErrorComponent";
import { RouterNotFoundComponent } from "./lib/tanstack/router/RouterNotFoundComponent";
import { RouterPendingComponent } from "./lib/tanstack/router/RouterPendingComponent";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";


// defaultViewTransition: true,
// defaultPendingComponent: () => <RouterPendingComponent />,
// defaultNotFoundComponent: () => <RouterNotFoundComponent />,
// defaultErrorComponent: ({ error }) => <RouterErrorComponent error={error} />,
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_, __, ___, mutation) => {
      if (Array.isArray(mutation.meta?.invalidates)) {
        // biome-ignore lint/complexity/noForEach: <explanation>
        mutation.meta?.invalidates.forEach((key) => {
          return queryClient.invalidateQueries({
            queryKey: [key.trim()],
          });
        });
      }
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
export function createRouter() {
  const queryClient = new QueryClient();

  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      context: { queryClient },
      defaultPreload: "intent",
      defaultViewTransition: true,
      defaultPendingComponent: () => <RouterPendingComponent />,
      defaultNotFoundComponent: () => <RouterNotFoundComponent />,
      defaultErrorComponent: ({ error }) => <RouterErrorComponent error={error} />,
    }),
    queryClient
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
