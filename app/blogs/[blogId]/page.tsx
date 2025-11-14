import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlog } from "@/lib/client";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function Page(props: {
    params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await props.params;
  const blog = await getBlog(blogId);

  if (!blog) {
    notFound();
  }

  
  return (
    <article className="mx-auto max-w-3xl">
      <Button asChild className="mb-4">
        <Link href="/">← Back to all posts</Link>
      </Button>
      <div className="relative mb-8 h-[400px]">
        <Image
          src={blog.thumbnail?.url ?? "/no-image.png"}
          alt={blog.thumbnail?.alt ?? ""}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
      <div className="mb-6 flex items-center">
        <span className="mr-4 text-slate-600">
          {formatDate(blog.publishedAt!)}
        </span>
        <Badge variant="secondary">バッジ</Badge>
      </div>
      <div className="prose max-w-none">
        <div className="prose max-w-none">
        {blog.content && (
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        )}
      </div>
      </div>
    </article>
  );
}