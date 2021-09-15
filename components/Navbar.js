import Link from "next/link"
import NextImage from "./Image"
// import NextImage from "next/image"

const Navbar = () => {
  return (
    <div className="ml-6 mr-6 mt-4">
      <div className="flex justify-center">
        <Link href="/">
          <a>
            <NextImage
              src="/inline-header-3.png"
              alt="home"
              className="logo"
              height="144"
              width="930"
            />
          </a>
        </Link>
      </div>
      <div className="flex justify-center bg-white shadow-md rounded-sm mt-2">
        <NextImage
            src="/brands-header.png"
            alt="home"
            // className="logo"
            // layout="fill"
            height={76}
            width={507}
          />

      </div>
    </div>
  )
}

export default Navbar
