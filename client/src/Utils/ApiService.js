const BASE_URL = 'http://localhost:3003';

async function fetchApi(slug, options) {
  const res = await fetch(BASE_URL + slug, options);
  return res.json();
}

export function getAllWidgets() {
  return fetchApi('/widgets');
}

export function getWidget(id) {
  return fetchApi('/widget/' + id);
}
