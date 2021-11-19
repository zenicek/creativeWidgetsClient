import { Widget } from '../Types/Widget';

const BASE_URL = 'http://localhost:3003';

interface Options {
  method: string;
  headers?: { [key: string]: string };
  body?: string;
}

async function fetchApi<T>(path: string, options: Options): Promise<T> {
  const res = await fetch(BASE_URL + path, options);
  return res.json();
}

export function getAllWidgets(): Promise<Widget[]> {
  return fetchApi<Widget[]>('/widgets', { method: 'GET' });
}

export function getWidget(id: string): Promise<Widget> {
  return fetchApi<Widget>('/widget/' + id, { method: 'GET' });
}

export function createWidget(widget: Widget): Promise<Widget> {
  return fetchApi<Widget>('/widget', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(widget),
  });
}

export function removeWidget(id: string): Promise<Widget> {
  return fetchApi<Widget>('/widget/' + id, {
    method: 'DELETE',
  });
}

export function updateWidget(id: string, widget: Widget): Promise<Widget> {
  return fetchApi<Widget>('/widget/' + id, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(widget),
  });
}
