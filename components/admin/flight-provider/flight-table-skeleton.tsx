import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function AdminFlightTableSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Desktop */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Departure Date</TableHead>
              <TableHead>Departure Time</TableHead>
              <TableHead>Flight Number</TableHead>
              <TableHead>Group Representative</TableHead>
              <TableHead className="w-[100px]" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 4 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20 rounded-md" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-28" />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-background p-4"
          >
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-2 h-6 w-20" />
            <Skeleton className="mt-2 h-5 w-24 rounded-md" />
            <Skeleton className="mt-3 h-3 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}