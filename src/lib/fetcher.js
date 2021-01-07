export const fetcher = (url, options) =>
  fetch(url, options)
    .then((res) => res.text())
    .then((body) => {
      try {
        return JSON.parse(body)
      } catch {
        return body
      }
    })
    .catch(console.error)
