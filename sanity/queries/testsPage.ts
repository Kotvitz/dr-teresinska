import { groq } from "next-sanity";

export const testsPageQuery = groq`
*[_type == "testsPage"][0]{
  intro{ title, text, image, imageAlt },
  scope{
    title,
    cards[]{ title, items }
  },
  mostCommon{
    title,
    left{ title, items[]{ name, desc } },
    right{ title, items[]{ name, desc }, note }
  },
  visitFlow{
    title,
    steps[]{ title, text },
    cta{ label, href }
  }
}
`;
