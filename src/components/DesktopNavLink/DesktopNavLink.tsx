
import WithoutMenu from "./WithoutMenu"
import WithMenu from "./WithMenu"

interface menuItem {
    text: string,
    href: string
}

interface DesktopNavLinkProps {
    text: string,
    href: string,
    items?: Array<menuItem>,
    asElem?: "a"
}

function DesktopNavLink({ text, href, items=[], asElem }: DesktopNavLinkProps) {

    if(items.length > 0) return <WithMenu text={text} items={items} />
    return <WithoutMenu asElem={asElem} text={text} href={href} />
}

export default DesktopNavLink