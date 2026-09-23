import { useEffect, useState } from "react";
import api from "../services/api";

// Generic GET hook for public content endpoints (services, products,
// portfolio, partners, positions, banner). Returns a `reload` function too,
// handy after an admin action elsewhere in the same session.
export default function useFetch(endpoint, fallback) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const reload = () => {
    setLoading(true);
    api.get(endpoint)
      .then((res) => { setData(res.data); setError(false); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(reload, [endpoint]);

  return { data, loading, error, reload };
}
