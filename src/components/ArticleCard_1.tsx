import ReadMoreButton_1 from "./ReadMoreButton_1"

interface Props {
    id: string,
    img: string,
    title: string,
    pubDate: string,
    desc: string,
    link: string,
    commentsCount: number,
    readMoreText: string,
    className?: string,
    hasCommentsText?: string,
    notHasCommentsText?: string
}

function ArticleCard_1({
    id, img, title, pubDate, desc, commentsCount, link, readMoreText, className="",
    hasCommentsText="Comments", notHasCommentsText="No Comments"
}: Props) {
  return (
    <div className={"overflow-hidden rounded-xl max-w-sm " + className }>
        <img    
            alt=""
            src={img}
            className="w-full aspect-square max-w-sm"
        />
        <div className="p-5 pb-12 bg-black/95 flex flex-col gap-y-4">
            <p className="text-white text-2xl font-normal line-clamp-2">
                {title}
            </p>

            <p className="text-white/60 text-xs font-normal">
                {pubDate}
                &nbsp;
                -
                &nbsp;
                {commentsCount > 0 ? commentsCount + " " + hasCommentsText : notHasCommentsText}
            </p>

            <p className="text-white/90 leading-6 text-base font-normal line-clamp-5">
                {desc}
            </p>
            
            <ReadMoreButton_1 text={readMoreText} className="mt-3 !text-slate-100 hover:!text-slate-300" />
        </div>
    </div>
  )
}

export default ArticleCard_1