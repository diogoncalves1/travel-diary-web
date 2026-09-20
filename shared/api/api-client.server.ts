import { cookies } from "next/headers";
import { request, FetcherOptions } from "./api-client";

async function getToken() {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value;
  } catch {
    return undefined;
  }
}

export const serverApiClient = {
  get: async <T>(
    endpoint: string,
    options?: Pick<FetcherOptions, "revalidate">,
  ) => request<T>(endpoint, await getToken(), options),
  post: async <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, await getToken(), {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  put: async <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, await getToken(), {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: async <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, await getToken(), {
      method: "DELETE",
      ...(body !== undefined && { body: JSON.stringify(body) }),
    }),
};
