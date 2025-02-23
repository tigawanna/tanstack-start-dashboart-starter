import { useSidebar } from "@/components/shadcn/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import SiteIcon from "@/components/icons/Siteicon";
import { useViewer } from "@/lib/viewer/use-viewer";

interface DashboardSidebarHeaderProps {}

export function DashboardSidebarHeader({}: DashboardSidebarHeaderProps) {
  const { state, setOpenMobile, isMobile } = useSidebar();
  const { pathname } = useLocation();
  const { viewer } = useViewer();
  return (
    <div
      className="flex flex-col gap-3 "
      onClick={() => {
        setOpenMobile(false);
      }}>
      <Link
        to="/"
        className="flex w-full items-center justify-center border-b border-primary py-4 hover:bg-primary/20">
        <SiteIcon height={50} />
      </Link>
    </div>
  );
}
