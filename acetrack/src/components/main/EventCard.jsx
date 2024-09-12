import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
export default function EventCard({
  title,
  description,
  date,
  time,
  location,
}) {
  return (
    <Card className="w-full rounded-3xl">
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">Siglakas</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span className="text-sm">January 14, 2024</span>
          </div>
          <div className="flex items-center space-x-3">
            <ClockIcon className="w-5 h-5 text-primary" />
            <span className="text-sm">8:00 am - 5:00 pm</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPinIcon className="w-5 h-5 text-primary" />
            <span className="text-sm">DOrSU Main Campus</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
