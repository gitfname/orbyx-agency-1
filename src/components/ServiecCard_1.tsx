import ReadMoreButton_1 from "./ReadMoreButton_1"

interface props {
    img: string,
    title: string,
    description: string,
    readMoreText?: string,
    showReadMore?: boolean
}

function ServiecCard_1({ img="", title, description, readMoreText, showReadMore=true }: props) {

    return (
        <div
            className="w-full rounded-sm p-4 py-12 border border-slate-300 hover:border-slate-700 transition-colors
            duration-300 flex flex-col gap-y-3"
        >
            {
                typeof img === "string"
                ?
                    <div className="p-2 rounded-sm bg-slate-800 w-max">
                        <img
                            loading="lazy"
                            alt=""
                            src={img}
                            className="w-9 h-9 object-center object-cover"
                        />
                    </div>
                :
                    img
            }
            <p className="text-2xl tracking-wide font-medium text-slate-700 mt-3">
                {title}
            </p>

            <p className="text-sm leading-6 line-clamp-4 text-slate-600 font-normal">
                {description}
            </p>

            {
                showReadMore === true
                ?
                    <ReadMoreButton_1 text={readMoreText ? readMoreText : "Read more"} />
                :
                    false
            }
        </div>
    )
}

export default ServiecCard_1