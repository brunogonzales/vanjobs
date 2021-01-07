export const fetcher = (...args) =>
  fetch(...args, {
    headers: {
      Accept: "text/plain",
    },
  }).then((res) => res.json())
