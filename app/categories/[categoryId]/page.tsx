import EventList from "@/components/event-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getEvents } from "@/lib/client";

export default async function Page(props: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await props.params;
  const { contents: events } = await getEvents({
    filters: `ategory[equals]${categoryId}`,
  });

  return (
    <div>
      <CategoryFilter currentCategoryId={categoryId} />
      <EventList events={events} />
      {/* <Pagination /> */}
    </div>
  );
}