import CategoryButtons from "@/components/CategoryButtons"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Spinner from "./Spinner"

const Layout = ({ children, navItems, contactDetails }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar contactDetails={contactDetails} />
        <CategoryButtons categories={navItems} />
        
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
