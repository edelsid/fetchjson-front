import { useJsonFetch } from "./useJsonFetch"

export function Loading() {
   const [data, loading, error] = useJsonFetch('https://jsonfetch.onrender.com/loading');

   return (
     <div className="panel loading">
       <p className="info">Loading: {JSON.stringify(loading)}</p>
     </div>
   )
}
