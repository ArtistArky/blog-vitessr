const getAuthorSlug = () => {
  const location = window.location.hostname.split(".")[0];
  const url = import.meta.env.VITE_URL;

  console.log(location);

  const authorSlug =
    location != url
      ? location == "en0o22-5173"
        ? "hrithik"
        : location
      : "hrithik";

  return authorSlug;
};

export default getAuthorSlug;
