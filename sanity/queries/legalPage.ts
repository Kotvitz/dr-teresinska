import { groq } from "next-sanity";

export const legalPageBySlugQuery = groq`
*[_type == "legalPage" && slug.current == $slug][0]{
  title,
  html,
  metaTitle,
  metaDescription
}
`;
