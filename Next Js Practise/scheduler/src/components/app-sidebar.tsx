"use client";
import { Book, Calendar, Clock, LayoutDashboard, Users } from "lucide-react";

import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "../",
    icon: LayoutDashboard,
  },
  {
    title: "Skills",
    url: "skills",
    icon: Book,
  },
  {
    title: "Employees",
    url: "employees",
    icon: Users,
  },
  {
    title: "Shift Management",
    url: "shift-management",
    icon: Clock,
  },
  {
    title: "Roster Management",
    url: "roster-management",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const pathname = usePathname().slice(1);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-base mb-3">
            Scheduler
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={item.url === pathname ? "bg-sidebar-accent" : ""}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-lg">
                      <item.icon />
                      <span
                        className={`${
                          item.url === pathname ? "font-bold" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
