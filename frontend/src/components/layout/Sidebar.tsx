import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import {
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  BackpackIcon,
  GearIcon,
  CalendarIcon,
  FileTextIcon,
  BarChartIcon,
  ClipboardIcon,
  CameraIcon,
  TokensIcon,
  MobileIcon
} from "@radix-ui/react-icons";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { label: "Dashboard", path: "/", icon: HomeIcon },
  { label: "Students", path: "/students", icon: PersonIcon },
  { label: "Admissions", path: "/admissions", icon: ReaderIcon },
  { label: "Staff", path: "/staff", icon: BackpackIcon },
  { label: "Courses & Batches", path: "/courses", icon: FileTextIcon },
  { label: "Fees & Payments", path: "/fees", icon: TokensIcon },
  { label: "Hostel", path: "/hostel", icon: MobileIcon },
  { label: "Attendance", path: "/attendance", icon: ClipboardIcon },
  { label: "Exams", path: "/exams", icon: CameraIcon },
  { label: "Timetable & Events", path: "/timetable", icon: CalendarIcon },
  { label: "Reports", path: "/reports", icon: BarChartIcon },
  { label: "Settings", path: "/settings", icon: GearIcon },
];

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
        collapsed ? "w-sidebar-collapsed" : "w-sidebar"
      )}
    >
      {/* Logo Area */}
      <div className="h-header flex items-center justify-center border-b border-border px-4">
        {!collapsed ? (
          <h1 className="text-xl font-bold text-primary">Campus Flow</h1>
        ) : (
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "sidebar-nav-item",
                isActive && "active",
                collapsed && "justify-center px-2"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium text-sm">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};