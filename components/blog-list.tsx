import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Blog } from "@/lib/client"; 
import { formatDate } from "@/lib/utils"; 


type Props = {
  blogs: Blog[];
};


export default function BlogList(props: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {props.blogs.map((blog) => (
        <Link href={`/blogs/${blog.id}`} key={blog.id}>
          <Card className="overflow-hidden">
            <div className="relative h-48 border"><figure><img src={blog.thumbnail.url} alt={blog.thumbnail.alt} /></figure></div>
            <CardContent className="p-4">
              <Badge>テスト</Badge>
              <h2 className="text-xl font-semibold prose">{blog.title}</h2>
            </CardContent>
            <CardFooter className="text-sm text-slate-600prose">
              {formatDate(blog.publishedAt!)}
            </CardFooter>
          </Card>
        </Link>
      ))}
      
    </div>
  );
}

