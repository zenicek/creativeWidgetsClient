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

export function createWidget(widget) {
  return fetchApi('/widget', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(widget),
  });
}

export function removeWidget(id) {
  return fetchApi('/widget/' + id, {
    method: 'DELETE',
  });
}
