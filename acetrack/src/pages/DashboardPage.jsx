import DashboardHeader from "@/components/dashboard/DashboardHeader";
import UpcomingEventsList from "@/components/dashboard/UpcomingEventsList";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-2">
      <DashboardHeader />
      <div>
        <h4 className="font-semibold text-[#1e1e1e]">Upcoming Events</h4>
        <UpcomingEventsList />
      </div>
    </div>
  );
}
