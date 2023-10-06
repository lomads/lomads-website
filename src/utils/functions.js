/**
 * 
 * @param {Record<string, string>} data 
 * @returns 
 */
const objectToUrlParams = (data) => {
  const params = Object.entries(data)
    .filter(([, value]) => value)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );
  return params.length ? `?${params.join("&")}` : "";
}

/**
 * 
 * @param {string} url 
 * @param {string} title 
 * @param {string} summary 
 * @returns 
 */
export const getLinkedinUrl = (url, title, summary) =>
  `https://linkedin.com/shareArticle${objectToUrlParams({
    url,
    mini: "true",
    title,
    summary,
  })}`;