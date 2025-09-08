import { Badge } from "../components/ui/badge";
import { MetricCard } from "../components/dashboard/MetricCard";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { QuickActions } from "../components/dashboard/QuickActions";
import { AttendanceChart } from "../components/dashboard/AttendanceChart";
import { FeesOverview } from "../components/dashboard/FeesOverview";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      changeType: "positive" as const,
      icon: "👥"
    },
    {
      title: "Active Staff",
      value: "186",
      change: "+3%",
      changeType: "positive" as const,
      icon: "👨‍🏫"
    },
    {
      title: "Fee Collection",
      value: "₹45.2L",
      change: "-5%",
      changeType: "negative" as const,
      icon: "💰"
    },
    {
      title: "Attendance Rate",
      value: "89.5%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: "📊"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening at your college.
          </p>
        </div>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
          Academic Year 2024-25
        </Badge>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <AttendanceChart />
          <FeesOverview />
        </div>

        {/* Right Column - Activities & Actions */}
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;