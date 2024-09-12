import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
function DashboardHeader() {
  return (
    <div>
      <div className="pt-5">
        <h1 className="text-4xl text-slate-800">Welcome</h1>
        <h1 className="text-4xl font-semibold text-slate-800">Kaarlo</h1>
      </div>
      <div className="relative w-full max-w-sm py-5">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search an event..."
          className="pl-10 text-[16px] rounded-full h-12 placeholder:text-[16px]"
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
