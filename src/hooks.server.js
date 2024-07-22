export async function handle({ event, resolve }) {
  const response = await resolve(event);
  response.headers.set('x-robots-tag', 'index, follow');
  return response
}