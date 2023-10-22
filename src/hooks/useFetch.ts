import { useEffect, useState } from "react"

export default function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData();
  }, [url])

  return {
    data, 
    loading,
    error
  }
}