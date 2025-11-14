import {
  createClient,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";

// if (!process.env.MICROCMS_SERVICE_DOMAIN) {
//   throw new Error("サービスドメインが必要です");
// }

// if (!process.env.MICROCMS_API_KEY) {
//   throw new Error("APIキーが必要です");
// }

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// カテゴリの出力 （エンドポイント: categoriesから）
export type Category = {
  id: string;
  name: string;
};

// Blog記事のエクスポート(エンドポイント: astro)
export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  thumbnail: {
    url: string,
    height: number,
    width: number,
    alt: string
  }
}


export type Event = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  eventTitle: string
  eventCategory: Category;
  eventDate:string
  eventStartTime:string
  eventHour:string
  eventPlace:string
  eventMember:string
  eventCourtNum:string
  eventCourtSurface:string
  eventPrice:number
  eventContent:string
}


// カテゴリの書き出し　ここはcategoriesのエンドポイントから書き出している
export async function getCategories() {
  const categories = await client.getList<Category>({
    endpoint: "categories",
  });

  return categories;
}

// blog記事　全体の書き出し
export async function getBlogs(queries?: MicroCMSQueries) {
  const blogs = await client.getList<Blog>({
    endpoint: "astro",
    queries: {
      limit: 10,
    }
  });

  return blogs;
}

// blog記事単体の書き出し
export async function getBlog(contentId: string) {
  const blog = await client.getListDetail<Blog>({
    endpoint: "astro",
    contentId,
  });

  return blog;
}

// イベントの一覧の書き出し　ここはeventエンドポイントから書き出しているので注意
export async function getEvents(queries?:MicroCMSQueries ) {
  const events = await client.getList<Event>({
    endpoint: "event",
  });

  return events;
}

// event単体の書き出し
export async function getEvent(contentId: string) {
  const event = await client.getListDetail<Event>({
    endpoint: "event",
    contentId,
  });

  return event;
}