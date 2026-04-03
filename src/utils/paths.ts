const baseUrl = (import.meta.env.BASE_URL ?? '/').toString();
const baseUrlNormalized = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

/**
 * 将 `/contact` 这类根绝对路径转换为「带 Astro base 的绝对路径」。
 * 这样子路径部署时不会跳到域名根目录。
 */
export function withBase(path: string) {
  const input = path ?? '/';
  if (input === '/' || input === '') return baseUrlNormalized;

  const normalizedPath = input.startsWith('/') ? input.slice(1) : input;
  return `${baseUrlNormalized}${normalizedPath}`;
}

