
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
                    <button
                        className="border-none w-max focus:outline-foreground bg-transparent text-slate-800 text-lg
                        mt-3 font-medium hover:text-slate-700/90 transition-colors duration-200"
                    >
                        {
                            readMoreText ? readMoreText : "Read more"
                        }
                    </button>
                :
                    false
            }
        </div>
    )
}

export default ServiecCard_1