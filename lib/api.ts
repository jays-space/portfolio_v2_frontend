import qs from "qs";

export const getURL = (path = "") => {
  return `${
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : process.env.NEXT_PUBLIC_STRAPI_API_URL
  }${path}`;
};

export const fetchAPI = async (
  path: string,
  urlParamsObject = {},
  options = {}
) => {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }
  const data = await response.json();
  return data;
};

export function getMedia(media: any) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getURL(url) : url;
  return imageUrl;
}

export function getLoaderMedia(media: any) {
  const { url, formats } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getURL(`${formats?.large?.url}`) : url;
  return imageUrl;
}
