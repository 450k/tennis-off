import { getCategories } from "@/lib/client"; 
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  currentCategoryId?: string;
};

export default async function CategoryFilter(props: Props) {
  const { contents: categories } = await getCategories(); 
  const currentCategoryId = props.currentCategoryId;
  const currentCategory = categories.find(
    (category) => category.id === currentCategoryId
  );
  
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        {currentCategoryId ? currentCategory?.name : "カテゴリ"}
      </h2>

      <div className="flex flex-wrap gap-2">
        <Link href="/">
          <Button
            variant={currentCategoryId === undefined ? "default" : "outline"}
          >
            すべて
          </Button>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Button
              variant={
                category.id === currentCategoryId ? "default" : "outline"
              }
            >
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}