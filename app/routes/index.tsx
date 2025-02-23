import { createFileRoute } from "@tanstack/react-router";
import { MainNavbar } from "~/components/navigation/navbar/MainNavbar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center">
      <MainNavbar />
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
        <h3>Welcome Home!!!</h3>
      </div>
    </div>
  );
}
