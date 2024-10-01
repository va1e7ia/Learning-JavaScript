const urls = [
  "http://example.com",
  "https://secure-site.com",
  "ftp://fileserver.com",
  "http://another-example.com",
  "not-a-url",
];

const filteredUrls = urls.filter((url) => url.startsWith("http://"));

console.log(filteredUrls);
