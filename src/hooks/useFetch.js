// import { useState, useEffect } from "react";

// export function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true)
//     try{
//         const fetchData = async () => {
//             const response=await fetch(url)
//             if(!response.ok){
//                 throw new error("Failed to fetch the data")
                
//             }
//             const fetchedData = await response.json()
//         setData(fetchedData)
            
//         }
        

//     }
//     catch(err){
//         setError(err.message)
//         setLoading(false)
//     }
//     finally{
//         setLoading(false)
//     }
//     fetchData()
    
//   }, [url]); // re-run whenever the URL changes

//   return { data, loading, error };
// }





// // TODO 1: Create an AbortController instance
//     //         const controller = new AbortController();
//     // TODO 2: Reset states at the start of every new fetch
//     //         (so old data doesn't linger while new data loads)
//     //         setLoading(true);
//     //         setData(null);
//     //         setError(null);
//     // TODO 3: Call fetch(url, { signal: controller.signal })
//     //         Chain .then() to parse the JSON response
//     //         Chain .catch() to catch network errors
//     //         In .then(), call setData() with the result and setLoading(false)
//     //         In .catch(), if the error name is "AbortError" ignore it
//     //         otherwise call setError(err.message) and setLoading(false)
//     // TODO 4: Return a cleanup function that aborts the controller
//     //         return () => controller.abort();















import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}