import { Inbox, LogOut, Settings, SunMoon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";

const suggestion = [
  {
    location: "Pimpri Chinchwad",
    temperature: 29,
    type: "sunny",
  },
  {
    location: "New Delhi",
    temperature: 26,
    type: "sunny",
  },
  {
    location: "Mumbai",
    temperature: 31,
    type: "sunny",
  },
];

// Menu items.
const items = [
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Theme",
    url: "#",
    icon: SunMoon,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Favourites</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {suggestion.map((item) => (
                <SidebarMenuItem key={item.location}>
                  <SidebarMenuButton asChild>
                    <div className="h-24 mb-3 grid grid-cols-2 space-y-2 border border-black">
                      <div className="border border-black">{item.location}</div>
                      <div className=" border border-black">
                        {item.temperature}
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="cursor-pointer">
                <SidebarMenuButton asChild>
                  <SignOutButton>
                    <div>
                      <LogOut />
                      <span>Logout</span>
                    </div>
                  </SignOutButton>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
