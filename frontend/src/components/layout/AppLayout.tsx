import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { cn } from "../../lib/utils";

export const AppLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="flex w-full">
        {/* Sidebar */}
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        
        {/* Main Content Area */}
        <div className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "ml-sidebar-collapsed" : "ml-sidebar"
        )}>
          {/* Top Navigation */}
          <TopNav 
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
          
          {/* Page Content */}
          <main className="p-6 pt-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};