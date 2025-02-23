import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";
import { Toaster } from "react-hot-toast";

export function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <TanStackRouterDevtools position="bottom-left" />
        <ReactQueryDevtools buttonPosition="bottom-right" />
        <Toaster reverseOrder />
        <Scripts />
      </body>
    </html>
  );
}
