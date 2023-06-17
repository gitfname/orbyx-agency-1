
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ApplicationLayout from "./layouts/ApplicationLayout"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ChakraProvider } from "@chakra-ui/react"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"
import { ApplicationRoutes } from "./routes"
import ContactUs from "./pages/ContactUs"
import OurTeam from "./pages/OurTeam"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  const [_, i18n] = useTranslation()  

  // set theme 
  useEffect(
    () => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = import.meta.env.BASE_URL+"/themes/light.css"
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
    <ChakraProvider>
      <ApplicationLayout>
        <Routes>
          <Route path={ApplicationRoutes.pages.home} element={<Home />} />
          <Route path={import.meta.env.BASE_URL+"/blog"} element={<p>hello world from blog</p>} />
          <Route path={ApplicationRoutes.pages.contact} element={<ContactUs />} />
          <Route path={ApplicationRoutes.pages.company["about-us"]} element={<AboutUs />} />
          <Route path={ApplicationRoutes.pages.company["our-team"]} element={<OurTeam />} />
          <Route path={ApplicationRoutes.pages.company.services} element={<Services />} />
          <Route path={ApplicationRoutes.pages.work.project} element={<Projects />} />
          <Route path={ApplicationRoutes.pages.work["project-details"]} element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApplicationLayout>
    </ChakraProvider>
  )
}

export default App
