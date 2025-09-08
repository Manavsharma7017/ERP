import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { TriangleUpIcon, TriangleDownIcon } from "@radix-ui/react-icons";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}

export const MetricCard = ({ title, value, change, changeType, icon }: MetricCardProps) => {
  return (
    <Card className="erp-card hover:shadow-medium transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
            <div className="flex items-center mt-2 gap-1">
              {changeType === "positive" ? (
                <TriangleUpIcon className="w-4 h-4 text-green-500" />
              ) : (
                <TriangleDownIcon className="w-4 h-4 text-red-500" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  changeType === "positive" ? "text-green-600" : "text-red-600"
                )}
              >
                {change}
              </span>
              <span className="text-sm text-muted-foreground">from last month</span>
            </div>
          </div>
          <div className="text-3xl">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};