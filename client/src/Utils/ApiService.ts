import { Calculator } from '../Types/Widget';

const BASE_URL = 'http://localhost:3003';

interface Options {
  method: string;
  headers?: { [key: string]: string };
  body?: string;
}

async function fetchApi<T>(
  path: string,
  options: Options = { method: 'GET' }
): Promise<T> {
  const res = await fetch(BASE_URL + path, options);
  return res.json();
}

export function getAllWidgets(): Promise<Calculator[]> {
  return fetchApi<Calculator[]>('/widgets');
}

export function getWidget(id: string): Promise<Calculator> {
  return fetchApi<Calculator>(`/widget/${id}`);
}

export function createWidget(widget: Calculator): Promise<Calculator> {
  return fetchApi<Calculator>('/widget', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(widget),
  });
}

export function removeWidget(id: string): Promise<Calculator> {
  return fetchApi<Calculator>(`/widget/${id}`, {
    method: 'DELETE',
  });
}

export function updateWidget(
  id: string,
  widget: Calculator
): Promise<Calculator> {
  return fetchApi<Calculator>(`/widget/${id}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(widget),
  });
}
