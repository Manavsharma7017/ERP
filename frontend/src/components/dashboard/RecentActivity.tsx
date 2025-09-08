import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { ClockIcon } from "@radix-ui/react-icons";

interface Activity {
  id: string;
  type: "admission" | "fee" | "attendance" | "exam";
  title: string;
  description: string;
  time: string;
  user: string;
  avatar?: string;
}

export const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: "1",
      type: "admission",
      title: "New Admission Application",
      description: "John Doe submitted application for CS Engineering",
      time: "5 min ago",
      user: "JD",
    },
    {
      id: "2", 
      type: "fee",
      title: "Fee Payment Received",
      description: "Sarah Wilson paid semester fee ₹85,000",
      time: "12 min ago",
      user: "SW",
    },
    {
      id: "3",
      type: "attendance",
      title: "Attendance Marked",
      description: "CS-101 batch attendance updated by Dr. Smith",
      time: "25 min ago",
      user: "DS",
    },
    {
      id: "4",
      type: "exam",
      title: "Exam Schedule Published",
      description: "Mid-term exam schedule for all departments",
      time: "1 hour ago",
      user: "AD",
    }
  ];

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "admission": return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "fee": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "attendance": return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "exam": return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <Card className="erp-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <Avatar className="w-8 h-8">
              <AvatarImage src={activity.avatar} />
              <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                {activity.user}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm text-foreground">{activity.title}</p>
                <Badge variant="outline" className={getActivityColor(activity.type)}>
                  {activity.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};