import { groq } from "next-sanity";

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0]{
  main{
    title,
    subtitle,
    paragraphs,
    photo{
      alt,
      asset->{
        _id,
        url,
        metadata{ dimensions{ width, height } }
      }
    }
  },
  certificates{
    title,
    text
  }
}
`;
