import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { PlusIcon, PersonIcon, FileTextIcon, TokensIcon } from "@radix-ui/react-icons";

export const QuickActions = () => {
  const actions = [
    {
      label: "Add New Student",
      icon: PersonIcon,
      variant: "default" as const,
      onClick: () => console.log("Add student")
    },
    {
      label: "Create Course",
      icon: FileTextIcon,
      variant: "outline" as const,
      onClick: () => console.log("Create course")
    },
    {
      label: "Record Payment",
      icon: TokensIcon,
      variant: "outline" as const,
      onClick: () => console.log("Record payment")
    }
  ];

  return (
    <Card className="erp-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlusIcon className="w-5 h-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="w-full justify-start gap-2 rounded-2xl"
            onClick={action.onClick}
          >
            <action.icon className="w-4 h-4" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};