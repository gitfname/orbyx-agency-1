import AnimatedStatCount from "./AnimatedStatCount"

interface Props {
    className: string,
    stats: any
}

function StatsSection_1({className, stats}: Props) {
  return (
    <div className={"w-full bg-black/95 py-36 grid max-lg:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center " + className} >
        {
        stats?.map((stat, i) => (
            <div className="relative" key={i}>
            <p className="text-white/90 text-2xl lg:text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                {stat?.title}
            </p>
            {
                typeof stat?.speed === "number" && stat?.speed >= 1
                ?
                <AnimatedStatCount speed={stat.speed} start={stat.start} end={stat.end} counterClassName="!text-8xl lg:!text-9xl !font-bold !text-slate-300/40" />
                :
                null
            }
            </div>
        ))
        }
    </div>
  )
}

export default StatsSection_1