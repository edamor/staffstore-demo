import { useRouter } from "next/router"
import { useEffect, useState } from "react"



const Spinner = () => {

  const router = useRouter()

  let [state, setState] = useState()


  useEffect(() => {
    const handleStart = () => setState(true);
    const handleComplete = () => setState(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    
  }, [router])
  

  return (
    <>
      {
        state &&
        <div className="absolute flex	bg-white bg-opacity-50 justify-center items-center h-full w-full top-0 left-0 translate-x-1/2 translate-y-1/2">
          {/* <svg className="animate-spin h-40 w-40 z-50" viewBox="0 0 120 120" /> */}
          <img src="/loader-2.svg" alt="loader" />
        </div>
        
      }
    </>
  )
}

export default Spinner;