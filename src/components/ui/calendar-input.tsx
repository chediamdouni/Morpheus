"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export function CalendarInput() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={
            "w-full justify-start text-left font-normal py-4 px-3 border bg-white rounded-xs shadow-sm focus:ring-accent focus:border-accent" +
            (!date ? " text-muted-foreground" : "")
          }
        >
          <CalendarIcon className="mr-2 h-5 w-5 opacity-60" />
          {date ? format(date, "PPP") : <span>Date souhaitée</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
