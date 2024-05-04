import { useState, useEffect } from "react"
import { PageTransition } from "../components"
import { useStateContext } from "../utils/Context"

const Home = () => {
  const [loading, setLoading] = useState(false)
  
  return (
    <PageTransition>Home</PageTransition>
  )
}

export default Home