import { groq } from "next-sanity";

export const specializationsPageQuery = groq`
*[_type == "specializationsPage"][0]{
  intro{
    title,
    text,
    image,
    imageAlt
  },
  groupsSection{
    title,
    groups[]{
      title,
      items
    }
  }
}
`;
