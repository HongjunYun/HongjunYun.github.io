import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    stack: z.array(z.string()).optional(),
  }),
})

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    category: z.string().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

// 1. resume 컬렉션 정의하기
const resume = defineCollection({
  type: 'content', // 마크다운(MD/MDX) 파일 기반임을 의미
  // z(Zod)를 이용해 마크다운 상단(Frontmatter)의 규칙을 정해줄 수 있습니다.
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { resume, work, blog, projects, legal }
