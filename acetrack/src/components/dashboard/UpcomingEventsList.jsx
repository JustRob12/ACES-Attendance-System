import EventCard from "../main/EventCard";
import { Skeleton } from "../ui/skeleton";

function UpcomingEventsList() {
  return (
    <div className="py-2 space-y-5 mb-16">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export default UpcomingEventsList;
