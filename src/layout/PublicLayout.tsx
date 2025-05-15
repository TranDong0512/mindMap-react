import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
export const PublicLayout = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
};
