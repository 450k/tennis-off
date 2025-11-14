import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getEvent } from "@/lib/client";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";



export default async function Page(props: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await props.params;
  const event = await getEvent(eventId);

  if (!event) {
    notFound();
  }

  const categoryName = event.eventCategory?.name;
  
  return (
    <article className="mx-auto max-w-3xl">
      <Button asChild className="mb-4">
        <Link href="/">← Back to all posts</Link>
      </Button>

      <h1 className="mb-4 text-4xl font-bold">{event.eventTitle}</h1>
      
      <div className="mb-6 flex items-center gap-4">
        {event.publishedAt && (
          <span className="text-slate-600">
            {formatDate(event.publishedAt)}
          </span>
        )}
        {event.eventCategory && (
          <Badge variant="secondary">
            {categoryName}
          </Badge>
        )}
      </div>

      <div className="prose max-w-none">
        <h2 className="title">
          【{categoryName}】{formatDate(event.eventDate)} {event.eventPlace}
        </h2>
        
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <th className="border p-2 bg-gray-100 text-left">開催日時</th>
              <td className="border p-2">
                {formatDate(event.eventDate)} {event.eventStartTime}から{event.eventHour}時間
              </td>
            </tr>
            <tr>
              <th className="border p-2 bg-gray-100 text-left">場所</th>
              <td className="border p-2">{event.eventPlace}</td>
            </tr>
            <tr>
              <th className="border p-2 bg-gray-100 text-left">コート</th>
              <td className="border p-2">
                {event.eventCourtSurface} {event.eventCourtNum}面
              </td>
            </tr>
            <tr>
              <th className="border p-2 bg-gray-100 text-left">参加人数</th>
              <td className="border p-2">Max {event.eventMember}人</td>
            </tr>
            <tr>
              <th className="border p-2 bg-gray-100 text-left">参加費</th>
              <td className="border p-2">{event.eventPrice}円</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-6 mb-3 text-xl font-semibold">備考</h3>
        {event.eventContent && (
          <div
            dangerouslySetInnerHTML={{
              __html: event.eventContent,
            }}
          />
        )}
      </div>
    </article>
  );
}