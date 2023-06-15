import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"
import AnimatedStatCount from "../components/AnimatedStatCount"

function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <AboutUs_1 />
      <Services_1 className="mt-14" />

      <div className="mt-14 px-4 lg:px-10 w-full bg-black/95 py-36 grid grid-cols-4 gap-6 place-items-center">
        <div className="relative">
          <p className="text-white/90 text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            Years of Experience
          </p>
          <AnimatedStatCount speed={100} start={1} end={19} counterClassName="!text-9xl !font-bold !text-slate-300/40" />
        </div>

        <div className="relative">
          <p className="text-white/90 text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
           Projects Complete
          </p>
            <AnimatedStatCount speed={35} start={350} end={500} counterClassName="!text-9xl !font-bold !text-slate-300/40" />
        </div>

        <div className="relative">
          <p className="text-white/90 text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
           Professional Team
          </p>
            <AnimatedStatCount speed={75} start={1} end={38} counterClassName="!text-9xl !font-bold !text-slate-300/40" />
        </div>

        <div className="relative">
          <p className="text-white/90 text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
           Satisfied client
          </p>
            <AnimatedStatCount speed={35} start={420} end={689} counterClassName="!text-9xl !font-bold !text-slate-300/40" />
        </div>
      </div>
    </div>
  )
}

export default Home