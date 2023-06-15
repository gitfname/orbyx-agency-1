import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"

function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <AboutUs_1 />
      <Services_1 className="mt-14" />
    </div>
  )
}

export default Home