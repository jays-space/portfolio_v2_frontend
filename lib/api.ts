import qs from "qs";

export const getURL = (path = "") => {
  return `${
    process.env.REACT_APP_BACKEND_URL || "http://localhost:1337"
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
