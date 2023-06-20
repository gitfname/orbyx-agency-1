
import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface ApplicationLayoutProps {
    children: ReactNode
}

function ApplicationLayout({children}: ApplicationLayoutProps) {

  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default ApplicationLayout