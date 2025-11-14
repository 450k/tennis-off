import {
  createClient,
  MicroCMSQueries,
} from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || 'dummy';
const apiKey = process.env.MICROCMS_API_KEY || 'dummy';

// デバッグ用ログ
if (typeof window === 'undefined') {
  console.log('========== microCMS設定 ==========');
  console.log('Service Domain:', serviceDomain);
  console.log('API Key length:', apiKey.length);
  console.log('API Key starts with:', apiKey.substring(0, 8) + '...');
  console.log('API Key ends with:', '...' + apiKey.substring(apiKey.length - 8));
  console.log('Is dummy?:', apiKey === 'dummy');
  console.log('==================================');
}

const client = createClient({
  serviceDomain,
  apiKey,
});

// 型定義は省略（そのまま）
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
    alt: string;
  };
};

export type EventList = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  eventTitle: string;
  eventCategory: Category;
  eventDate: string;
  eventStartTime: string;
  eventHour: string;
  eventPlace: string;
  eventMember: string;
  eventCourtNum: string;
  eventCourtSurface: string;
  eventPrice: number;
  eventContent: string;
};

export async function getCategories(queries?: MicroCMSQueries) {
  const categories = await client.getList<Category>({
    endpoint: "event",
    ...(queries && { queries }),
  });
  return categories;
}

export async function getEvents(queries?: MicroCMSQueries) {
  const events = await client.getList<EventList>({
    endpoint: "event",
    ...(queries && { queries }),
  });
  return events;
}

export async function getEvent(contentId: string) {
  const event = await client.getListDetail<EventList>({
    endpoint: "event",
    contentId,
  });
  return event;
}

export async function getBlogs(queries?: MicroCMSQueries) {
  const mergedQueries = queries ? { limit: 10, ...queries } : { limit: 10 };
  const blogs = await client.getList<Blog>({
    endpoint: "astro",
    queries: mergedQueries,
  });
  return blogs;
}

export async function getBlog(contentId: string) {
  const blog = await client.getListDetail<Blog>({
    endpoint: "astro",
    contentId,
  });
  return blog;
}