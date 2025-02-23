import { ChevronRight, Home, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/shadcn/dropdown-menu";
import { routes } from "../routes";
import { ThemeToggle } from "~/components/themes/ThemeToggle";
import { MainNavbarUser } from "./MainNavbarUser";
import { Link } from "@tanstack/react-router";

interface MainNavbarLinksProps {}

export function MainNavbarLinks({}: MainNavbarLinksProps) {
  return (
    <div className="w-full">
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-fit w-fit px-2">
            <DropdownMenuLabel>Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {routes.map((route) => (
              <DropdownMenuItem key={route.name}>
                <Link className="w-full flex  gap-2" to={route.href}>
                  {route.icon}
                  {route.name}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <ThemeToggle />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-3">
              <MainNavbarUser />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full md:flex gap-5 hidden justify-between items-center">
          <Link to="/" className="text-sm flex gap-0.5 hover:text-primary justify-center items-center">
          <Home/>
          </Link>
        <div className="w-full flex gap-1">
          {routes.filter((route) => route.href !=="/").map((route) => (
            <Link key={route.name} to={route.href} className="text-sm flex gap-0.5 hover:text-primary justify-center items-center">
              {route.name}
              <ChevronRight className="size-3"/>
            </Link>
          ))}
        </div>
        <div className="flex gap-1">
          <ThemeToggle compact />
          <MainNavbarUser compact />
        </div>
      </div>
    </div>
  );
}
