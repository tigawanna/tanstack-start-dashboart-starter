import { createFileRoute } from "@tanstack/react-router";
import { ResponsiveGenericToolbar } from "~/components/navigation/navbar/ResponsiveGenericToolbar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center">
      <ResponsiveGenericToolbar>
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
        <h3>Welcome Home!!!</h3>
      </div>
      </ResponsiveGenericToolbar>
    </div>
  );
}
