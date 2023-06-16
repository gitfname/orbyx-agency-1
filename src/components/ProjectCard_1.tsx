import ReadMoreButton_1 from "./ReadMoreButton_1"

interface Props {
    id: string,
    img: string,
    title: string,
    desc: string,
    link: string,
    cta_text: string
}

function ProjectCard_1({ id, img, title, desc, link, cta_text }: Props) {
    link
    id

  return (
    <div className="w-full rounded-xl p-4 py-8 shadow-[2px_2px_15px_rgba(70,70,70,0.1)] cursor-pointer max-w-sm">

        <img
            alt=""
            src={img}
            className="w-full aspect-square max-w-sm mx-auto block rounded-xl"
        />

        <div className="mt-4 flex flex-col gap-y-3 px-2">
            <p className="text-slate-800 tracking-wide font-bold text-2xl">
                {title}
            </p>
            <p className="text-slate-600/90 leading-6 text-base font-normal">{desc}</p>

            <ReadMoreButton_1 text={cta_text} />
        </div>

    </div>
  )
}

export default ProjectCard_1