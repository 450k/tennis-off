import BlogList from "@/components/blog-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getBlogs } from "@/lib/client";
import { getEvents } from "@/lib/client";
import { LIMIT } from "@/lib/constants";
import EventList from "@/components/event-list";

export default async function Home() {
  const { contents: blogs } = await getBlogs({
    limit: LIMIT,
    offset: 0,
  });
  
  const { contents: events } = await getEvents({
    limit: LIMIT,
    offset: 0,
  });

  return (
    <div>
      <CategoryFilter />
      <BlogList blogs={blogs} />
      <EventList events={events} />
      <Pagination />
    </div>
  );
}
