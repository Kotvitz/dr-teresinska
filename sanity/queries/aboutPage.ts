// src/sanity/queries/aboutPage.ts
import { groq } from "next-sanity";

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0]{
  main{
    title,
    subtitle,
    paragraphs
  },
  certificates{
    title,
    text
  }
}
`;
