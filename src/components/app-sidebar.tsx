import * as React from "react"
import { ChevronRight } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Main concept",
      url: "/",
      items: [
        {
          title: "React là gì?",
          url: "/react",
        },
        {
          title: "Vite",
          url: "/vite",
        },
        {
          title: "ReactDOM là gì?",
          url: "/react-dom",
        },
        {
          title: "VirtualDom là gì?",
          url: "/virtual-dom",
        },
        {
          title: "JSX là gì?",
          url: "/jsx",
        }, {
          title: "Component",
          url: "/component",
        },
      ],
    },
    {
      title: "State and Props",
      url: "",
      items: [
        {
          title: "Props",
          url: "/props",
        },
        {
          title: "State",
          url: "/state",
        },
      ],
    },

    {
      title: "Lifecycle và useEffect",
      url: "",
      items: [
        {
          title: "Lifecycle",
          url: "/lifecycle",
        },
        {
          title: "useEffect",
          url: "/useEffect",
        },
      ],
    },
    {
      title: "HOC và Hooks nâng cao",
      url: "",
      items: [
        {
          title: "HOC",
          url: "/hoc",
        },
        {
          title: "Hooks",
          url: "/hooks",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild >
                          <NavLink to={item.url}>{item.title}</NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
