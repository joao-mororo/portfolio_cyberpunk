import { headers } from "next/headers";

export default async function apiFetch(url, options) {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "";
  const domain = headersList.get("x-forwarded-host") || "";

  return await fetch(`${protocol}://${domain}/${url}`, options);
}
