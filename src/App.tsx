
import { Suspense } from "react"
import { Hero } from "./Component/Hero"
import Nav from "./Component/Nav"
import Technologies from "./Component/Technologies/Technologies"
import type { Technology } from "./Type"
import { Footer } from "./Component/Footer"

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
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Technologies TechnologiesPromise={TechnologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
