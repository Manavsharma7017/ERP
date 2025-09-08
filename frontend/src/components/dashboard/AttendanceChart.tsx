import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export const AttendanceChart = () => {
  const data = [
    { name: "Mon", attendance: 85 },
    { name: "Tue", attendance: 92 },
    { name: "Wed", attendance: 78 },
    { name: "Thu", attendance: 89 },
    { name: "Fri", attendance: 94 },
    { name: "Sat", attendance: 76 },
  ];

  return (
    <Card className="erp-card">
      <CardHeader>
        <CardTitle>Weekly Attendance Trend</CardTitle>
        <p className="text-sm text-muted-foreground">
          Average attendance rate across all departments
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[60, 100]}
              />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};