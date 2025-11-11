"use client";
import { useState, useEffect } from "react";

export default function useCachedFetch(url, cacheKey, cacheDuration = 6 * 60 * 1000) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const now = Date.now();
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = Number(localStorage.getItem(`${cacheKey}_time`));

    // Use cached data if not expired
    if (cachedData && cachedTime && now - cachedTime < cacheDuration) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setData(json.data);
            localStorage.setItem(cacheKey, JSON.stringify(json.data));
            localStorage.setItem(`${cacheKey}_time`, now.toString());
          } else {
            setError("Invalid response");
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [url, cacheKey, cacheDuration]);

  return { data, loading, error };
}
