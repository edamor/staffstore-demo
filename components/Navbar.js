import Link from "next/link"
import NextImage from "@/components/Image"

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
      <div className="flex flex-col text-xs md:text-base">
        <div className="text-center w-full font-semibold">
          Bldg 328 Sabina, 60 Pilar rd., Almanza Uno, Las Piñas, 1750 Metro Manila
        </div>
        <div className="flex flex-wrap justify-around">
          <span className="font-semibold">Mobile: 0926-099-5188</span>
          <span className="font-semibold">Landline: 8801-6349, 8806-8723, 8805-5927</span>
          <div className="flex gap-2">
            <span className="font-semibold">Facebook: </span>
            <span>
              <a href="https://www.facebook.com/StaffstoreInc/" target="_blank" rel="noreferrer noopener">
                <NextImage alt="fb logo" src="/facebook.png" height={24} width={24}  />
              </a>
            </span>
            <span>
              <a href="https://m.me/StaffstoreInc/" target="_blank" >
                <NextImage  alt="fb messenger logo" src="/messenger.png" height={24} width={24} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white shadow-md rounded-sm mt-2">
        <NextImage
            src="/brands-header.png"
            alt="home"
            height={76}
            width={507}
          />
      </div>
    </div>
  )
}

export default Navbar
