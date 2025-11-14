import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button"
import { Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter, } from "./ui/item";
import { Badge } from "./ui/badge";
import { Event } from "@/lib/client"; 
import { formatDate } from "@/lib/utils"; 


type Props = {
  events: Event[];
};


export default function EventList(props: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {props.events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle><h2 className="text-xl font-semibold prose">{event.eventTitle}</h2></ItemTitle>
              <ItemDescription>{formatDate(event.eventDate!)}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                詳細
              </Button>
            </ItemActions>
          </Item>
        </Link>
      ))}
      
    </div>
  );
}

