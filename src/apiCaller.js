export default function callAPI(url) {
  return fetch(url, {
    headers: {
      "user-key": "744173abbd5abbfc395bd3ed6854da5c"
    }
  }).then(res => res.json());
}
