
import { Suspense } from "react"
import { Hero } from "./Component/Hero"
import Nav from "./Component/Nav"
import Technologies from "./Component/Technologies"
import type { Technology } from "./Type"

const TechnologiesFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/Technologies.json")
  const data = await res.json()
  return data
}

const TechnologiesPromise = TechnologiesFetch()

function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense>
        <Technologies TechnologiesPromise={TechnologiesPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
