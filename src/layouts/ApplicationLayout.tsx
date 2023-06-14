
import { ReactNode } from "react"
import Header from "../components/Header"

interface ApplicationLayoutProps {
    children: ReactNode
}

function ApplicationLayout({children}: ApplicationLayoutProps) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default ApplicationLayout