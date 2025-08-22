import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
const SEOHead = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = "/og-image-marsstein.jpg",
  ogType = "website",
  structuredData
}) => {
  const siteUrl = "https://marsstein.com";
  const fullTitle = `${title} | Marsstein`;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: `${siteUrl}${canonical}` }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical ? `${siteUrl}${canonical}` : siteUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: `${siteUrl}${ogImage}` }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: canonical ? `${siteUrl}${canonical}` : siteUrl }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: `${siteUrl}${ogImage}` }),
    structuredData && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
  ] });
};
export {
  SEOHead as S
};
