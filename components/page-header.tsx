import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border bg-card py-12", className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {description}
          </p>
        )}

        { children && <div>{ children }</div> }
      </div>
    </div>
  );
}
