import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DataBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value?: string;
  description?: string;
  children?: React.ReactNode;
}

export function DataBlock({ title, value, description, children, className, ...props }: DataBlockProps) {
  return (
    <Card className={cn("bg-card/50 border-border/50 shadow-none hover:shadow-sm transition-shadow duration-300", className)} {...props}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-tight uppercase">
          {title}
        </CardTitle>
        {value && (
          <div className="text-3xl font-semibold tracking-tight text-foreground mt-2">
            {value}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {description && (
          <CardDescription className="text-sm text-muted-foreground mb-4">
            {description}
          </CardDescription>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
