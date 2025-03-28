import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AppSidebar } from "./AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
type MainLayoutProps = {
  children: ReactNode;
};
export function MainLayout({
  children
}: MainLayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <SidebarInset className="w-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 sm:pt-18 md:pt-20 lg:pt-24 overflow-x-hidden mx-px">{children}</main>
        <Footer />
      </SidebarInset>
    </div>;
}