import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NextImage from "./Image"

const Layout = ({ children, navItems }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
        <CategoryButtons categories={navItems} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
