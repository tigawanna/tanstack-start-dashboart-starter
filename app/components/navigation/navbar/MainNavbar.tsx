import { Link, useRouterState } from "@tanstack/react-router";
import { Home } from "lucide-react";
import Nprogress from "../nprogress/Nprogress";
import { ThemeToggle } from "../../themes/ThemeToggle";
import { MainNavbarUser } from "./MainNavbarUser";
import { MainNavbarLinks } from "./MainNavbarLinks";

interface MainNavbarProps {}

export function MainNavbar({}: MainNavbarProps) {
    const panding = useRouterState().status === "pending";
  return (
    <nav className="w-full sticky top-0  p-2 bg-base-200 flex flex-col items-center justify-center">
      <div className="w-full  flex items-center justify-between">
        <MainNavbarLinks/>
        {/* <ThemeToggle /> */}
        {/* <MainNavbarUser /> */}
      </div>
      <Nprogress isAnimating={panding} />
    </nav>
  );
}
