import { groq } from "next-sanity";

export const contactPageQuery = groq`
*[_type == "contactPage"][0]{
  header{ title, text },
  map{
    title,
    iframeTitle,
    embedUrl,
    placeUrl,
    openLabel
  },
  form{
    title,
    requiredNote,
    submitIdle,
    submitSending,
    successMessage,
    errorMessage,
    consentText
  }
}
`;
