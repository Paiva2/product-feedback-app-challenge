import React from "react"
import { Loader, LoaderOverlay } from "./styles"

const LoadingComponent = () => {
  return (
    <LoaderOverlay>
      <Loader />
    </LoaderOverlay>
  )
}

export default LoadingComponent
