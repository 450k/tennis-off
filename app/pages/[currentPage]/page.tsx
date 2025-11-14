import BlogList from "@/components/blog-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getBlogs } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Page(props: {
  params: Promise<{ currentPage: string }>;
}) {
  const { currentPage } = await props.params;
  const currentPageInt = parseInt(currentPage, 10);
  const { contents: blogs, totalCount } = await getBlogs({
    limit: LIMIT,
    offset: (currentPageInt - 1) * LIMIT,
  });

  return (
    <div>
      <CategoryFilter />
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} currentPage={currentPageInt} />
    </div>
  );
}
