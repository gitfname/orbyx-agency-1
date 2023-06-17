
interface WordProperties {
    name: string,
    value: string
}

interface Props {
    title: string,
    subtitle: string,
    desc: string,
    workProperties: Array<WordProperties>,
    button_text: string,
    img: string,
    reverse?: boolean
}

function ProjectDetialsCard({ title, desc, subtitle, workProperties, button_text, img, reverse=false }: Props) {
  return (
    <div className="px-4 max-lg:max-w-3xl mx-auto lg:px-10 grid grid-cols-1 lg:grid-cols-[10fr_12fr] gap-x-8 gap-y-10 w-full mt-20 lg:place-items-center">
        <div className={`${reverse?"lg:order-2":""} max-lg:order-2`}>
            <p className="text-slate-900 font-[iranyekan300] text-5xl max-w-xl">
                {title}
            </p>
            <p className="text-gray-800 font-[iranyekan500] text-sm mt-4 max-w-2xl">
                {subtitle}
            </p>
            <p className="text-gray-600 font-[iranyekan300] text-sm mt-4 max-w-2xl">
                {desc}
            </p>
            <div className="mt-5 flex flex-col gap-y-3">
                {
                    workProperties.map(workProperty => (
                        <p key={workProperty.name} className="text-sm text-slate-900 font-[iranyekan[400]">
                            {workProperty.name} <span className="font-[iranyekan300]">{workProperty.value}</span>
                        </p>
                    ))
                }
            </div>
            <button className="bg-black/95 max-w-sm transition-transform active:scale-95 text-base font-[iranyekan300] text-white py-3 px-4 w-full rounded mt-7">
                {button_text}
            </button>
        </div>

        <img
            loading="lazy"
            src={img}
            alt=""
            className={`${reverse?"lg:order-1":""} w-full h-auto max-w-3xl block mx-auto rounded-sm max-lg:order-1`}
        />
    </div>
  )
}

export default ProjectDetialsCard