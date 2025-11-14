import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="text-2xl font-bold">
          Alternative Tennis-Off
        </Link>
        <form className="mx-4 max-w-sm flex-1">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="キーワードを入力..." />
            <Button type="submit">検索</Button>
          </div>
        </form>
      </div>
    </header>
  );
}