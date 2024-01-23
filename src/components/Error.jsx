import { useJsonFetch } from "./useJsonFetch"

export function Error() {
  const [data, loading, error] = useJsonFetch('https://jsonfetch.onrender.com/error');
  return (
      <div className="panel error">
        <p className="info">Error: {error}</p>
      </div>
    )
}
