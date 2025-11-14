import BlogList from "@/components/blog-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getBlogs, getEvents } from "@/lib/client";
import { LIMIT } from "@/lib/constants";
import EventList from "@/components/event-list";

export default async function Page() {
  const { contents: blogs, totalCount } = await getBlogs();
  const { contents: events } = await getEvents();

  return (
    <div>
      <CategoryFilter />
      <BlogList blogs={blogs} />
      <EventList events={events} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}
