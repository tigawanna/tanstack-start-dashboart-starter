import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export function viewerQueryOptions() {
  return queryOptions({
    queryKey: ["viewer"],
    queryFn: async () => {
      return fetchCurrentViewer();
    },
    staleTime: 1000 * 60 * 60,
  });
}
export function useViewer() {
  const viewerQuery = useSuspenseQuery(viewerQueryOptions());
  const viewer = viewerQuery.data;
  function logoutMutation() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(true);
        } catch (error) {
          resolve(false);
        }
      });
    });
  }
  return { viewer, logoutMutation };
}

// Replace with your GitHub token

export interface Viewer {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
}

export async function fetchCurrentViewer(): Promise<Viewer | undefined> {
  return new Promise<Viewer>((resolve, reject) => {
    setTimeout(() => {
      try {
        // Simulate fetching viewer data
        resolve({
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          avatar_url: "http://example.com/avatar.jpg",
        });
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
