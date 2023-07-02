import { useEffect, useState } from "react"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<{
    width?: number
    height?: number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setIsMobile({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const checkResolution = !!isMobile.width && isMobile.width <= 768

  return checkResolution
}
