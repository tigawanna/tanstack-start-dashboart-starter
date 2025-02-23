import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-red-500 gap-2">
      <div className=" p-3 w-full bg-red-800">
        <div className="text-2xl">users layout</div>
      </div>

      <Outlet />
    </div>
  );
}
