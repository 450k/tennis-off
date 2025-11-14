import Link from "next/link";
import { Button } from "./ui/button";
import { LIMIT } from "@/lib/constants";

type Props = {
  totalCount: number;
  currentPage?: number;
  basePath?: string;
};

export default function Pagination(props: Props) {
  const pageCount = Math.ceil(props.totalCount / LIMIT);
  const currentPage = props.currentPage ?? 1;
  const basePath = props.basePath ?? "";

  return (
    <div className="mt-8 flex items-center justify-center space-x-2">
      {Array.from({ length: pageCount }).map((_, i) => (
        <Link key={i} href={`${basePath}/pages/${i + 1}`}> 
          <Button variant={i + 1 === currentPage ? "default" : "outline"}>
            {i + 1}
          </Button>
        </Link>
      ))}
    </div>
  );
}