
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ApplicationLayout from "./layouts/ApplicationLayout"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

function App() {
  const [t, i18n] = useTranslation()

  // set theme 
  useEffect(
    () => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = import.meta.env.BASE_URL+"themes/light.css"
      document.head.append(link)
    },
    []
  )

  // set direction based on current languaglanguage
  useEffect(
    () => {
      console.log(i18n.language);
      document.body.dir = i18n.dir(i18n.language)
    },
    [i18n.language]
  )
  


  return (
    <ApplicationLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog" element={<p>hello world from blog</p>} />
      </Routes>
    </ApplicationLayout>
  )
}

export default App
