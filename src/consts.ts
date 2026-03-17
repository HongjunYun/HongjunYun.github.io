import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Andy Yun",
  DESCRIPTION: "Welcome to Andy Yun's portfolio and blog.",
  AUTHOR: "Andy Yun",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Resume Page
export const RESUME: Page = {
  TITLE: "Resume",
  DESCRIPTION: "My professional resume.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  {
    HREF: "/waterloo",
    TEXT: "UWaterloo"
  },
  {
    TEXT: "Resume",
    HREF: "/resume",
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "a2yun@uwaterloo.ca",
    HREF: "mailto:a2yun@uwaterloo.ca",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "hongjunyun",
    HREF: "https://github.com/hongjunyun"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Hongjun (Andy) Yun",
    HREF: "https://www.linkedin.com/in/hongjunyun/",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "h0ng__yun",
    HREF: "https://www.instagram.com/h0ng__yun",
  },
]

