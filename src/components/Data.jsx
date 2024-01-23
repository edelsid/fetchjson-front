import { useJsonFetch } from "./useJsonFetch"

export function Data() {
   const [data, loading, error] = useJsonFetch('https://jsonfetch.onrender.com/data');
   if (data) {
      return (
         <div className="panel data">
           <p className="info">Data: {data.status}</p>
         </div>
      )
   }
}
