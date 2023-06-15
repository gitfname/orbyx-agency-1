
interface Props {
    text: string,
    className?: string
}

function ReadMoreButton_1({ text, className="" }: Props) {
  return (
    <button
        className={`border-none w-max focus:outline-foreground bg-transparent text-slate-800 text-lg
        font-medium hover:text-slate-700/90 transition-colors duration-200 ` + className }
    >
        { text }
    </button>
  )
}

export default ReadMoreButton_1