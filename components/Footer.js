import NextImage from "@/components/Image"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Staffstore Inc © 2021
      </p>
      <div className="flex gap-3 ml-4">
        
        <a href="https://facebook.com/staffstoreinc" className="ml-3">
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>

      </div>
    </div>
  )
}

export default Footer
