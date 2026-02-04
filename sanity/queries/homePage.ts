import { groq } from "next-sanity";

export const homePageQuery = groq`
*[_type == "homePage"][0]{
  hero{
    image,
    alt
  },
  aboutPreview{
    title,
    subtitle,
    text,
    cta{label, href}
  },
  servicesPreview{
    title,
    text,
    items,
    cta{label, href},
    image,
    imageAlt
  },
  diagnosticsPreview{
    title,
    text,
    items,
    cta{label, href},
    image,
    imageAlt
  },
  visitCta{
    title,
    text,
    button{label, href}
  }
}
`;
