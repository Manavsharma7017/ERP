import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export const FeesOverview = () => {
  const data = [
    { department: "Engineering", collected: 85, pending: 15 },
    { department: "Medicine", collected: 92, pending: 8 },
    { department: "Arts", collected: 78, pending: 22 },
    { department: "Commerce", collected: 88, pending: 12 },
    { department: "Science", collected: 91, pending: 9 },
  ];

  return (
    <Card className="erp-card">
      <CardHeader>
        <CardTitle>Fee Collection by Department</CardTitle>
        <p className="text-sm text-muted-foreground">
          Percentage of fees collected vs pending by department
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={10}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="department" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Bar 
                dataKey="collected" 
                stackId="fees"
                fill="hsl(var(--primary))" 
                radius={[0, 0, 4, 4]}
              />
              <Bar 
                dataKey="pending" 
                stackId="fees"
                fill="hsl(var(--accent))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Collected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-sm text-muted-foreground">Pending</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};