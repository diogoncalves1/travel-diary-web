type FetcherKey = [string, RequestInit?];

export const fetcher = async ([url, options]: FetcherKey) => {
  const res = await fetch(`/api${url}`, {
    ...options,
    credentials: "include",
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(
      data?.error ?? data?.message ?? data?.errors?.message ?? `Request failed: ${res.status}`,
    );
  }

  return data;
};
