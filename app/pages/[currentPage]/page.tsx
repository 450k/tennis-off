import EventList from "@/components/event-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getEvents } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Page(props: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await props.params;
  const { contents: events, totalCount } = await getEvents({
    limit: LIMIT,
    offset: 0,
    filters: `category[equals]${categoryId}`,
  });

  return (
    <div>
      <CategoryFilter currentCategoryId={categoryId} />
      <EventList events={events} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}